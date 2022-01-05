import React from "react";
import Gif from "../Gif";

import "./ListOfGifs.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="gifs__list">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </div>
  );
}
