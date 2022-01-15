import React from "react";
import Gif from "../Gif";

import "./index.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="list__gifs">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </div>
  );
}
