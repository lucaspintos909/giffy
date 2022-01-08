import { useContext, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const {gifs, setGifs} = useContext(GifsContext);

  
  useEffect(() => {
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';
    getGifs({ keyword: keywordToUse }).then((newGifs) => {
      setGifs(newGifs);
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, setGifs]);

  return { gifs };
}
