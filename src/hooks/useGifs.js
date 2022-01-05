import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState([]);

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then((newGifs) => {
      setGifs(newGifs);
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword]);

  return { gifs };
}
