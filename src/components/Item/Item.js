
import React from "react";
import { useNavigate } from "react-router-dom";
import './item.css';

const Item = ({items}) => {

  const navigate = useNavigate();

    return(
        <div className="container">
          <div className="card">
            <div className="image-container">
                <img src={items.imagenURL}  alt=" " className="card-image"/>
            </div>
            <div className="card-description">
              <h3>{items.nombre}</h3>
              <button className="btn" onClick={() => navigate(`/item/${items.id}`)}>VER MAS</button>
            </div>
        </div>
        </div>
    );
}

export default Item;