import React from "react";
import Gif from "../../components/Gif";
import { useGlobalGifs } from "../../hooks/useGlobalGifs";

import "./Detail.css";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  

  return (
    <div className="detail">
      <div className="detail__header">
        <h2 className="detail__title">{gif.title}</h2>
      </div>
      <Gif {...gif} />
    </div>
  );
}
