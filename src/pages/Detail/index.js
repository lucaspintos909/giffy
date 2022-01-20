import React, { useEffect } from "react";
import Gif from "components/Gif";
import { useGlobalGifs } from "hooks/useGlobalGifs";

import "./index.css";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="detail">
      <div className="detail__header">
        <h2 className="detail__title">{gif.title}</h2>
      </div>
      <Gif {...gif} />
    </div>
  );
}
