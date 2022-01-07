import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { gifs } = useGifs({ keyword });

  return (
    <>
      <h2>Busqueda: {keyword}</h2>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
