import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const ItemDetail = ({item = []}) => {
  
  //defindo variables que voy a usar del context en el componente.
  const { addToCart, isInCart } = useContext(CartContext);

  //separo el estado del count
  const [ count, setCount ] = useState(1);

  return (
    <div className="item-detail-container-cards">
      <div className="item-detail-card">
        <div className="item-detail-image-container">
          <img src={item.imagenURL} alt=" " className="item-detail-card-image" />
        </div>
        <div className="item-detail-card-description">
          <h3>{item.nombre}</h3>
          <h4>{item.precio}</h4>
        </div>
      </div>
      {isInCart(item.id) ? (
        <Link to="/cart"><button className="item-detail-btn">Terminar Compra</button></Link>
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
