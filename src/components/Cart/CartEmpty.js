import React from 'react'
import { Link } from 'react-router-dom';


const CartEmpty = () => {
  return (
    <div className='cart-container'>
        <h1>Parece que no tienes nada en tu carrito</h1>
        <Link to="/products"><button className='cart-btn'>Ir a comprar</button></Link>
    </div>
  )
}


export default CartEmpty;
