import React, { useEffect, useState } from "react";
import Gif from "./Gif/Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((newGifs) => {
      setGifs(newGifs);
    });
  }, [keyword]);

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </>
  );
}
