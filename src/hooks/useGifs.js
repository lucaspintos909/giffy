import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loadingNextPage, setLoadingNexPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);

  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then((newGifs) => {
      setGifs(newGifs);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNexPage(true);
    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNexPage(false);
    });
  }, [page, setGifs, keywordToUse]);

  return { gifs, lastKeyword: keywordToUse, setPage, loadingNextPage };
}
