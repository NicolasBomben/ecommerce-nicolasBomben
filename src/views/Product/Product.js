import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetailContainer } from "../../components/ItemDetailContainer/ItemDetailContainer";

const Product = () => {

    const { itemId } = useParams();

    return(
        <div>
            <ItemDetailContainer itemId={ itemId }/>
        </div>
        
    );
};

export default Product;