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
        <div>
          <CartList />
          <Link to="/products">
            <button>Seguir comprando</button>
          </Link>

          <button>Finalizar compra</button>

          <button
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
