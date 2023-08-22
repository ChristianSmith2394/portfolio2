import React from "react";
import "../styles/navbar.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </div>
  );
}

export default Navbar;
