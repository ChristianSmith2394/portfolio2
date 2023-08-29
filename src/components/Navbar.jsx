import React from "react";
import "../styles/navbar.css";
import { Router, Routes, Link } from "react-router-dom";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import App from "../App";

function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" exact activeClassName="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" exact activeClassName="active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" exact activeClassName="active">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" exact activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
