
import React from "react";
import { useNavigate } from "react-router-dom";


const Item = ({items}) => {

  const navigate = useNavigate();

    return(
        <div className="item-container">
          <div className="item-card">
            <div className="item-image-container">
                <img src={items.imagenURL}  alt=" " className="item-card-image"/>
            </div>
            <div className="item-card-description">
              <h3>{items.nombre}</h3>
              <button className="item-btn" onClick={() => navigate(`/item/${items.id}`)}>VER MAS</button>
            </div>
        </div>
        </div>
    );
}

export default Item;