import React, { createContext, useState } from "react";

//creo el contexto
const CartContext = createContext();

// desestructuro y traigo el Provider del CartContext
const { Provider } = CartContext;

const CartProvider = ({children}) => {

    //creo estado donde se guarda la data del cart
    const [ cart, setCart ] = useState([]);


    //funcion para añadir al carro
    const addToCart = (item, count) => {
        if(isInCart(item.id)){
            const newCart = cart.map(cartItem => {
                if(cartItem.id === item.id){
                    cartItem.quantity++;
                }
                return cartItem
            });
            setCart(newCart);
        }
        else{
            setCart([...cart, {...item, quantity: +count}]);
        }
    };


    //funcion para remover un item del carro
    const removeFromCart = (id) => {
        if(isInCart(id)){
            const newCart = cart.filter((cartItem) => cartItem.id !== id);
            setCart(newCart);
        }else{
            const newCart = cart.map((cartItem) => {
                if (cartItem.id === id) {
                  cartItem.quantity--;
                }
                return cartItem;
              });
              setCart(newCart);
        }  
        };
    
    

    
    //funcion para sumar las unidades del carrito
    const itemsCart = () => {
        return cart.reduce((prev, next) => prev + next.quantity, 0);
    }

    //funcion para comprobar si ese item por id esta en el carro
    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    };

    //funcion para obtener el total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
    }

    //funcion para eliminar un item del carro
    const deleteFromCart = (id) => {
        setCart(cart.filter((cartItem) => cartItem.id !== id));
    }

    //funcion para vaciar todo el carrito
    const deleteAll = () => {
        setCart([]);
    };

    //retorno provider con funciones para utilizar y el cart del state.
    return(
        <Provider value={{
            addToCart,
            removeFromCart,
            deleteAll,
            itemsCart,
            isInCart,
            getTotal,
            deleteFromCart,
            cart
        }}>{children}</Provider>
    );
};

export { CartContext, CartProvider}