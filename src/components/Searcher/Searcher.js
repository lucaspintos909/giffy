import React from "react";

import './Searcher.css';

export default function Searcher() {
  return (
    <div className="search__form">
      <label htmlFor="searchInput"> Buscar gif </label>
      <input
        className="search__input"
        id="searchInput"
        type="text"
        placeholder="Ingrese la búsqueda"
      />
    </div>
  );
}
