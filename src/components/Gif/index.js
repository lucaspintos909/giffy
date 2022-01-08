import React from "react";
import "./Gif.css";

import { Link } from "wouter";

export default function Gif({ id, title, url }) {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`} className="gif__link">
        <img className="gif__img" src={url} alt={title} />
      </Link>
    </div>
  );
}
