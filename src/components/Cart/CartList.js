import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartList = () => {
  
  const {  deleteFromCart, isInCart, cart, getTotal } = useContext(CartContext);
    
  return (
    <div>
      <h1>Carrito de compras</h1>
      <table>
        <thead>
          <tr>
            <th>Id.</th>
            <th>Cantidad</th>
            <th>Descripción</th>
            <th>Precio Unit</th>
            <th>Subtotal</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => (
            <tr key={prod.id}>
              <td>
                <img
                  src={prod.imagenURL}
                  alt="Imagene del producto"
                  style={{ height: 100 }}
                />
              </td>
              <td >{prod.quantity}</td>
              <td >{prod.nombre}</td>
              <td >
                {Intl.NumberFormat("es-AR", {
                  currency: "ARS",
                  style: "currency",
                }).format(prod.precio)}
              </td>
              <td>
                {Intl.NumberFormat("es-AR", {
                  currency: "ARS",
                  style: "currency",
                }).format(prod.quantity * prod.precio)}
              </td>
              <td> <button onClick={() => deleteFromCart(prod.id)}>Eliminar Producto</button></td>
            </tr>
          ))}
          <tr>
            <td >{isInCart()}</td>
            <td></td>
            <td >TOTAL COMPRA</td>
            <td >
              {Intl.NumberFormat("es-AR", {
                currency: "ARS",
                style: "currency",
              }).format(getTotal())}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
