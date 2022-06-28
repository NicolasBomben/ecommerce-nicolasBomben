import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { doc, addDoc, runTransaction, collection, getFirestore } from 'firebase/firestore';
import { Modal, Spinner } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';




const CartForm = () => {

  const { cart, getTotal, deleteAll } = useContext(CartContext);
  const [ formData, setFormData ] = useState({ name: "", email: "", phone: ""});
  const [ orderId, setOrderId ] = useState();
  const [ showForm, setShowForm ] = useState(false);
  const [ orderProcess, setOrderProcess ] = useState(false);


  //funcion que recibe el formulario.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //funcion para enviar la orden de compra.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOrderProcess(true);
    const order = {
      buyer: formData,
      items: cart,
      total: getTotal(),
    };
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, order).then(({id}) => {
      setOrderId(id);
      updateProducts();
    });
  };

  //funcion para cerrar el formulario una vez generadad la orden.
  const handleClose = () => {
    setShowForm(false);
    deleteAll();
  };

  const updateProducts = async () => {
    const db = getFirestore ()
    cart.forEach( async (item) => {
      const productRef = doc(db, `products`, item.id)
      await runTransaction(db, async (transaction) => {
      const transfDoc = await transaction.get(productRef);
      if (!transfDoc.exists()) {
        console.error("El documento no existe")
      }
      //updateo el stock del producto.
      const newStock = transfDoc.data().stock - item.quantity;
      transaction.update(productRef, { stock: newStock });
    });
    });
  };

 //formulario de compra
  return (
    <div show={showForm}>
      <form onSubmit={handleSubmit}>
        <h1>CHECK OUT</h1>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu Nombre"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu Email"
          onChange={handleChange}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Ingresa tu Telefono"
          onChange={handleChange}
        />
        {formData.name !== "" && formData.email !== "" && formData.phone !== "" ?(
          <button className="cart-btn"type='submit'>
          Generar Compra
        </button>
        ) : (
          <>
          <span className='cart-span'>Completa tus datos para generar la compra</span>
          </>
        )}
      </form>
      <div>
        {orderProcess &&
        (orderId === "" ? (
          <Modal.Body className="text-center text-success">
              <Spinner
                as="span"
                animation="border"
                role="status"
                aria-hidden="true"
                size="lg"
              />
              Procesando ...
            </Modal.Body>
        ) : (
          <>
            <Fade left opposite cascade>
                <Modal.Body className="bg-danger text-center text-white fw-normal cart-span">
                  {`La Orden se generó correctamente, muchas GRACIAS por su Compra!!! Para seguimiento de la misma tome nota del siguiente Número: ${orderId}`}
                </Modal.Body>
              </Fade>
            <Link to="/"><button  className="cart-btn"onClick={handleClose}>Close</button></Link>
          </>
        ))
        }
      </div>
    </div>
  )
    
}

export default CartForm;

