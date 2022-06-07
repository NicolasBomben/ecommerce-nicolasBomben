import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

//estilo
import "./itemDetail.css";

const ItemDetail = ({item = []}) => {
  
  //defindo variables que voy a usar del context en el componente.
  const { addToCart, isInCart } = useContext(CartContext);

  //separo el estado del count
  const [ count, setCount ] = useState(1);

  return (
    <div className="container-cards">
      <div className="card">
        <div className="image-container">
          <img src={item.imagenURL} alt=" " className="card-image" />
        </div>
        <div className="card-description">
          <h3>{item.nombre}</h3>
          <h4>{item.precio}</h4>
          <p>{item.talle}</p>
        </div>
      </div>
      {isInCart(item.id) ? (
        <Link to="/cart"><button>Terminar Compra</button></Link>
      ) : (
        <ItemCount
          onSubmit={() => addToCart(item, count)}
          count={ count }
          setCount={ setCount }
          stock={ item.stock }
          />
      )}
    </div>
  );
};

export default ItemDetail;
