import { useContext, useEffect, useState } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);

  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);

  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  /* setLoading(true);
  setLoading(false); */
  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then((newGifs) => {
      setGifs(newGifs);
      localStorage.setItem("lastKeyword", keywordToUse);
    });
  }, [keyword, keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    });
  }, [page, setGifs, keywordToUse]);

  return { loading, gifs, lastKeyword: keywordToUse, setPage, loadingNextPage };
}
