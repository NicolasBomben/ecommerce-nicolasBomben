import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
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
            <li><Link to="/category/remeras">T-SHIRTS</Link></li>
            <li><Link to="/category/pantalones">PANTS</Link></li>
            <li><Link to="/category/accsesorios">ACCESORIES</Link></li>
          </ul>
        </nav>
        <CartWidget/>
      </div>
    </header>
  );
}

export default navBar;
