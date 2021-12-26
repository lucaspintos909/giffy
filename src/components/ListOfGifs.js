import React, { useEffect, useState } from "react";
import Gif from "./Gif/Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const gifs = getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
    });
  }, [keyword]);

  return gifs.map(({ id, title, url }) => (
    <Gif id={id} title={title} url={url} key={id} />
  ));
}
