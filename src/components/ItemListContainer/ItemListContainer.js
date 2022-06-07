import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { products } from "../../data/products";
import { useParams } from "react-router-dom";

//estilo
import './itemListContainer.css';

const ItemListContainer = () => {

  
  const [items, setItems] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      if(categoryId){
        setItems(products.filter(item => item.category_id === +categoryId))
      }
      else{
        setItems(products);
      }
    }, 3000);
  },[categoryId])

  return (
        <ItemList items={items}/>
  );
};

export default ItemListContainer;