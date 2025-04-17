import React from 'react';
import '../style/header.css';

const Header=()=>{
    return(
          <header className="header">
      <h1 className="header-title">Welcome to My Website</h1>
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>)
}
export default Header;