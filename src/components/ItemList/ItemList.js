//simulo retardo de red con el async y setTimeOut.
//traigo la data.
//retorno un .map con el componente Item.

import React from "react";
import Item from '../Item/Item';

const ItemList = ({items = []}) => {

      return (
        <>
          {items.map((items) => (
              <Item items={items} key={items.id}/>
            )
          )}
        </>
      );
};

export default ItemList;

   