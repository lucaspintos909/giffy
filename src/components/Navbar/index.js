import React from "react";
import { Link } from "wouter";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Giffy</h1>
      <div className="navbar__links">
        <Link className="navbar__link" to="/">Home</Link>
      </div>
    </nav>
  );
}
