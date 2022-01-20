import React, { useEffect, useState } from "react";
import Gif from "components/Gif";
import { useGlobalGifs } from "hooks/useGlobalGifs";

import { getGif } from "services/getGifs";

import "./index.css";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const [gif, setGif] = useState(
    gifs.find((singleGif) => singleGif.id === params.id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!gif) {
      getGif({ id: params.id }).then((data) => {
        setGif(data);
      });
    }
  });

  return (
    <div className="detail">
      {gif ? (
        <>
          <div className="detail__header">
            <h2 className="detail__title">{gif.title}</h2>
          </div>
          <Gif {...gif} />{" "}
        </>
      ) : (
        <div>Cargando gif...</div>
      )}
    </div>
  );
}
