import React, { useState } from "react";
import { useLocation } from "wouter";

import "./index.css";

export default function Searcher() {
  const [keyword, setKeyword] = useState("");

  const [, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form className="searcher__form" onSubmit={handleSubmit}>
      <label htmlFor="searchInput" className="searcher__label">
        Buscar gif
      </label>
      <input
        type="text"
        className="searcher__input"
        autoComplete="off"
        placeholder="Ingrese la búsqueda"
        value={keyword}
        onChange={handleChange}
      />
    </form>
  );
}
