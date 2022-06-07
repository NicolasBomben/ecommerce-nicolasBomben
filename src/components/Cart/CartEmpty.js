import React from 'react'
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div>
        <h1>Carrito Vacio</h1>
        <Link to="/products"><button>Ir a comprar</button></Link>
    </div>
  )
}


export default CartEmpty;
