
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

//img del cart
import cartImg from '../../assets/img/shopping-cart.png';


const CartWidget = () => {

  const { itemsCart } = useContext(CartContext);

  return (
    <div>
        <Link to="/cart"><img src={cartImg}  alt="cart" className="img-cart"/></Link>
        <span className="cart-notification">
          {itemsCart()}
        </span>
    </div>
  )
}

export default CartWidget;