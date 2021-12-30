import React, { useEffect, useState } from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";

import "./ListOfGifs.css";

export default function ListOfGifs({props}) {
  const { keyword } = props;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((newGifs) => {
      setGifs(newGifs);
    });
  }, [keyword]);

  return (
    <div className="gifs__list">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </div>
  );
}
