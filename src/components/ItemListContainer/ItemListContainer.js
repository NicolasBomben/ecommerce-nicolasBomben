import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore"

//estilo
import './itemListContainer.css';

const ItemListContainer = ({categoryId}) => {

  const [items, setItems] = useState([]);
  

  //llamada a firebase para traer datos.
  useEffect(() => {
    const db = getFirestore();

    //condicional para filtrar por categoria
    if (categoryId) {
      const q = query(
        collection(db, "products"),
        where("category_id", "==", categoryId)
      );
      getDocs(q).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      //si no hay categoria, traer todos los productos
      const productsCollection = collection(db, "products");
      getDocs(productsCollection).then((snapshots) => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, [categoryId]);


  return (
        <ItemList items={items}/>
  );
};

export default ItemListContainer;
