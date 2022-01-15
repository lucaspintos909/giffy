import React from "react";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";

import "./index.css";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <h2>Busqueda: {decodeURI(keyword)}</h2>
      <ListOfGifs gifs={gifs} />

      <div className="navigation">
        <button onClick={handleNextPage} className="navigation__btn btn">
          Mostrar más
        </button>
      </div>
    </>
  );
}
