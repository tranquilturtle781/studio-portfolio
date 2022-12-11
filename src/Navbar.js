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
          <Link to="/project1">PROJECT 1</Link>
          <Link to="/project2">PROJECT 2</Link>
          <Link to="/project3">PROJECT 3</Link>
          <Link to="/project4">PROJECT 4</Link>
          </div>
          </div>
          <Link className="click" to="/about">ABOUT</Link>
    </nav>
    </div>
  );
}

export default Navbar;