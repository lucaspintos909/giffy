import React from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";
import Searcher from "../../components/Searcher";
import TrendingSearches from "../../components/TrendingSearches";

import "./Home.css";

export default function Home() {
  const { gifs, lastKeyword } = useGifs();

  return (
    <div className="home">
      <Searcher />

      <h2 className="home__title">Última búsqueda: {decodeURI(lastKeyword)}</h2>
      <ListOfGifs gifs={gifs} />

      <TrendingSearches />
    </div>
  );
}
