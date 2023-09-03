import "./App.css";
import Home from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";

import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Home />
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
    </div>
  );
}

export default App;
