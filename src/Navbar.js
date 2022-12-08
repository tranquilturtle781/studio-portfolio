import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
    <nav>
          <Link to="/">TRANQUIL TURTLE</Link>
    </nav>
    <nav id='clickable'>
          <Link to="/">WORK</Link>
          <Link to="/about">ABOUT</Link>
    </nav>
    </div>
  );
}

export default Navbar;