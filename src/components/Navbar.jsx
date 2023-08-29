import React from "react";
import "../styles/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import App from "../App";

function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
