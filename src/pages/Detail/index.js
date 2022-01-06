import React from "react";
import Gif from "../../components/Gif";
import { useGlobalGifs } from "../../hooks/useGlobalGifs";

import "./Detail.css";

export default function Detail({ params }) {
  const gifs = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  {/* <div>
    <p>{gif.title}</p>
    <img src={gif.url} alt="" />
  </div> */}
  return <Gif {...gif} />;
}
