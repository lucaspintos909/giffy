import React, { useState } from "react";
import "./App.css";
import { Route } from "wouter";

import Searcher from "./components/Searcher";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SearchResults from "./pages/SearchResults";

function App() {
  const [keyword, setKeyword] = useState("Simpsons");

  const changeKeyword = () => {};

  return (
    <div className="App">
      <section className="app__content">
        <Navbar />
        <Searcher />
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
      </section>
    </div>
  );
}

export default App;
