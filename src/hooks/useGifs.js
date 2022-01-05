import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((newGifs) => {
      setGifs(newGifs);
    });
  }, [keyword]);

  return { gifs };
}
