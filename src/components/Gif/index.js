import React from "react";
import "./Gif.css";

export default function Gif({ id, title, url }) {
  return (
    <a href={`#${id}`} className="gif">
      <img className="gif__img" src={url} alt={title} />
      {/* <p className="gif__title">{title}</p>
      <small className="gif__id">{id}</small> */}
    </a>
  );
}
