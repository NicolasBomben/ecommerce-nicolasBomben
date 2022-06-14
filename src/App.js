import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import Cart from "./views/Cart/Cart";
import CheckOut from "./views/CheckOut/CheckOut";


//import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

import "./styles/resetApp.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route 
            exact 
            path="/" 
           element={<Home />} />
          <Route 
            exact 
            path="/products" 
            element={<Products />} />
          <Route 
            exact 
            path="/item/:itemId" 
            element={<Product />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<Category />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart />}
          />
          <Route
            exact
            path="/checkout"
            element={<CheckOut/>}
          />
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
