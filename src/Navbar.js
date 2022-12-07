import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
    <nav>
          <Link to="/work">TRANQUIL TURTLE</Link>
    </nav>
    <nav id='clickable'>
          <Link to="/work">WORK</Link>
          <Link to="/about">ABOUT</Link>
    </nav>
    </div>
  );
}

export default Navbar;