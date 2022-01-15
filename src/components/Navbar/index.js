import React from "react";
import { Link } from "wouter";

import "./index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Giffy</h1>
      <div className="navbar__links">
        <Link className="navbar__link btn navbar__btn" to="/">Home</Link>
      </div>
    </nav>
  );
}
