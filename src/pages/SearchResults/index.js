import React, { useRef, useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import { useNearElement } from "hooks/useNearElement";
import Searcher from "components/Searcher";

import "./index.css";
import debounce from "just-debounce-it";

export default function SearchResults({ params }) {
  const { keyword } = params;

  const { loading, gifs, setPage } = useGifs({ keyword });

  const externalRef = useRef();

  const { isNearElement } = useNearElement({
    distance: "400px",
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 150),
    []
  );

  useEffect(() => {
    console.log(isNearElement);
    if (isNearElement) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearElement]);

  return (
    <>
      {loading ? (
        <div></div> /* Acá va el spinner */
      ) : (
        <>
          <Searcher searchKeyword={keyword} />
          <ListOfGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
}
