import React, { useState } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

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

  const [keyword, setKeyword] = useState("");

  const [, pushLocation] = useLocation();

  const { gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <div className="home">
      <form className="home__form" onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className="form__label">
          Buscar gif
        </label>
        <input
          id="searchInput"
          type="text"
          className="form__input"
          autoComplete="off"
          placeholder="Ingrese la búsqueda"
          value={keyword}
          onChange={handleChange}
        />
      </form>
      <h2 className="home__title">Última búsqueda</h2>
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
