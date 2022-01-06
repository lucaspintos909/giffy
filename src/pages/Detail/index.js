import React, { useContext } from "react";
import GifsContext from "../../context/GifsContext";
import Gif from "../../components/Gif";

import "./Detail.css";

export default function Detail({ params }) {
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((singleGif) => singleGif.id === params.id);

  console.log(gif);
  {/* <div>
    <p>{gif.title}</p>
    <img src={gif.url} alt="" />
  </div> */}
  return <Gif {...gif} />;
}
