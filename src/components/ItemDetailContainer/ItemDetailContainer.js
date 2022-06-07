import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../../data/products";

export const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setItem(products.find((item) => item.id === itemId));
    }, 2000);
  }, [itemId]);

  return <ItemDetail item={item} />;
};
