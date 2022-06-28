import React from 'react';
import 'react-toastify/dist/ReactToastify.css';



//recibo por params desde el contenedor padre ItemDetail.
const ItemCount = ({ count, setCount, stock, onSubmit}) => {


    //funcion para sumar ( onAdd)
    const handleAdd = () => {
        if(count < stock){
            setCount(count + 1);
        }
    };

    //funcion para restar ( onDecrease )
    const handleDecrease = () => {
        if(count > 1){
            setCount(count - 1);
        }
    };

  return (
    <div className="count-container">
        <button className="count-btn" onClick={ handleDecrease }> - </button>
        <span className='span'> {count} </span>
        <button className="count-btn" onClick={ handleAdd }> + </button>
        <button className="count-btn-agregar" onClick={ onSubmit }>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;

//lo estoy exportando para mostrar en el componente ItemListContainer.

