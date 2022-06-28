import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartList from "./CartList";
import CartEmpty from "./CartEmpty";



const Cart = () => {
  const { itemsCart, deleteAll } = useContext(CartContext);


  return (
    <>
      {itemsCart() === 0 ? (
        <CartEmpty />
      ) : (
        <div className="cart-btn-container">
          <CartList />
          <Link to="/products">
            <button className="cart-btn">Seguir comprando</button>
          </Link>

          <Link to="/checkout">
            <button className="cart-btn">Finalizar compra</button>
          </Link>
          <button
            className="cart-btn"
            onClick={() => {
              deleteAll();
            }}
          >
            Vaciar Carro
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
