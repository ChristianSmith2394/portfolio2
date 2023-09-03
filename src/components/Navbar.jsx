import React from "react";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import { Routes, Route } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>

        <Route path="/about" element={<About />}>
          About
        </Route>

        <Route path="/projects" element={<Projects />}>
          Projects
        </Route>

        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
}

export default Navbar;
