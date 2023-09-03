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
          <Route path="/" element={<App />}>
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

          {/* <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
