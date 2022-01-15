import React, { useState, useEffect } from "react";
import { Link } from "wouter";

import getTrendingTerms from "services/getTrendingTermsService";
export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then((newTrends) => setTrends(newTrends));
  }, []);

  return (
    <div>
      <h2 className="home__title">Los gifs más populares</h2>
      <ul className="popular__gifs-list">
        {trends.map((gif) => (
          <li key={gif}>
            <Link className="popular__gifs-link" to={`/search/${gif}`}>
              Gifs de {gif}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
