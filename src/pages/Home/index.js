import React from "react";
import { Link } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import Searcher from "../../components/Searcher";

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

  const { gifs, lastKeyword } = useGifs();

  return (
    <div className="home">
      <Searcher />

      <h2 className="home__title">Última búsqueda: {lastKeyword}</h2>
      <ListOfGifs gifs={gifs} />

      <h2 className="home__title">Los gifs más populares</h2>
      <ul className="popular__gifs-list">
        {popular_gifs.map((gif) => (
          <li key={gif}>
            <Link className="popular__gifs-link" to={`/search/${gif}`}>
              Gifs de {gif}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
