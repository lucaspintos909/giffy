import React from "react";
import { Link } from "wouter";
import "./Home.css";

export default function Home() {
  const popular_gifs = [
    "Uruguay",
    "Mate",
    "Rick",
    "Pandas",
    "Gatos",
    "Matrix",
    "Argentina",
    "Perros",
  ];

  return (
    <div className="home">
      <h2 className="home__title">Los gifs más populares</h2>
      <ul className="popular__gifs-list">
        {popular_gifs.map((gif) => (
          <li key={gif}>
            <Link className="popular__gifs_link" to={`/search/${gif}`}>
              Gifs de {gif}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
