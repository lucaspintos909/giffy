import React, { Suspense } from "react";
import { useNearElement } from "hooks/useNearElement";
import Loader from "./TrendingSearchesLoader";

import "./index.css";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

export default function LazyTrendingSearches() {
  const { isNearElement, elementRef } = useNearElement();

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Loader/>}>
        {isNearElement ? <TrendingSearches /> : <Loader/>}
      </Suspense>
    </div>
  );
}
