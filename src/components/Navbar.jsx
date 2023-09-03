import React from "react";
import "../styles/navbar.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import App from "../App";

function Navbar() {
  return (
    <div className="navbar">
      <Routes>
        <ul>
          <li>
            <Route path="/" element={<App />}>
              Home
            </Route>
          </li>
          <li>
            <Route path="/about" element={<About />}>
              About
            </Route>
          </li>
          <li>
            <Route path="/projects" element={<Projects />}>
              Projects
            </Route>
          </li>
          <li>
            <Route path="/contact" element={<Contact />}>
              Contact
            </Route>
          </li>
        </ul>
        {/* <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes> */}
      </Routes>
    </div>
  );
}

export default Navbar;
