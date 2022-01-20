import React, { useState } from "react";
import { useLocation } from "wouter";

import "./index.css";

export default function Searcher({ searchKeyword = "" }) {
  const [keyword, setKeyword] = useState(searchKeyword);

  const [, pushLocation] = useLocation();

  console.log(searchKeyword);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword.toString()}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form className="searcher" onSubmit={handleSubmit}>
      <div className="searcher__form">
        <label htmlFor="searchInput" className="searcher__label">
          Buscar gif
        </label>
        <input
          type="text"
          id="searchInput"
          className="searcher__input"
          autoComplete="off"
          placeholder="Ingrese la búsqueda"
          value={keyword}
          onChange={handleChange}
        />
      </div>
      <button className="btn searcher__button" type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

function SearchIcon() {
  return (
    <svg
      className="searcher__button-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
    </svg>
  );
}
