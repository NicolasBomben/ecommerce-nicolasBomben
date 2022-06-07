import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import "./navBar.css";
import logo from '../../assets/img/logoGrotesca.png';

function navBar() {
  return (
    <header className="header">
      <div className="normal-header">
        <img src={logo} alt="logo" className="header-img"/>
        <nav className="nav-bar">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/products">PRODUCTS</Link></li>
            <li><Link to="/category/1">T-SHIRTS</Link></li>
            <li><Link to="/category/3">PANTS</Link></li>
            <li><Link to="/category/2">ACCESORIES</Link></li>
          </ul>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
}

export default navBar;
