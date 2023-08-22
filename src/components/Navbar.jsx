import React from "react";
import "../styles/navbar.css";
import Route from "react";

function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Route href="/">Home</Route>
      </li>
      <li>
        <Route href="#about">About</Route>
      </li>
      <li>
        <Route href="#portfolio">Portfolio</Route>
      </li>
      <li>
        <Route href="#contact">Contact</Route>
      </li>
    </div>
  );
}

export default Navbar;
