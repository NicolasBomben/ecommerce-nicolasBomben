
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//img del cart
import cartImg from '../../assets/img/shopping-cart.png';
//estilo
import './cartWidget.css';

const CartWidget = () => {

  const { itemsCart } = useContext(CartContext);

  return (
    <div>
        <img src={cartImg}  alt="cart" className="img-cart"/>
        <span className="cart-notification">
          {itemsCart()}
        </span>
    </div>
  )
}

export default CartWidget;