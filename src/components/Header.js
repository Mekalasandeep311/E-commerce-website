import React from 'react';
import logo from '../assets/logo1.png-removebg-preview.png'; // ✅ correct file name from your folder

const Header = () => (
  <header>
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>E-commerce company</p>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#cart">Cart</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
