import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
    <nav id="click2">
          <Link to="/">TRANQUIL TURTLE</Link>
    </nav>
    <nav id='clickable'>
      <div className="dropdown">
          <Link className="click" id="c1" to="/">WORK</Link>
          <div className="dropdown-content">
          <Link to="/personas">PERSONAS</Link>
          <Link to="/redesign">REDESIGN</Link>
          <Link to="/iterativedesign">ITERATIVE DESIGN</Link>
          <Link to="/development">DEVELOPMENT</Link>
          </div>
          </div>
          <Link className="click" to="/about">ABOUT</Link>
    </nav>
    </div>
  );
}

export default Navbar;