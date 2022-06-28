import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import { products } from "../../data/products";
import {getFirestore, doc, getDoc} from "firebase/firestore";

export const ItemDetailContainer = ({ itemId }) => {

  const [item, setItem] = useState({});

  useEffect(() => {
    const db = getFirestore();
    //traigo el documento con el id que le paso por props
    const itemCollection = doc(db, "products", itemId);
    getDoc(itemCollection).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
      
    });
  }, [itemId]);


  return <ItemDetail item={item} />;
};
