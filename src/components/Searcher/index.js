import React from "react";

import "./index.css";

import { useLocation } from "wouter";

export default function Searcher() {
  const [location, setLocation] = useLocation();

  const searchGif = (evt) => {
    const keyword = evt.target.value;
    const route = `/search/${keyword}`;
    setLocation(route);
  };

  return (
    <div className="search__form">
      <label htmlFor="searchInput"> Buscar gif </label>
      <input
        className="search__input"
        id="searchInput"
        type="text"
        placeholder="Ingrese la búsqueda"
        onChange={searchGif}
      />
    </div>
  );
}
