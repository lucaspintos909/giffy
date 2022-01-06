import React, { useState } from "react";
import "./App.css";
import { Route } from "wouter";

import Searcher from "./components/Searcher";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  const [keyword, setKeyword] = useState("Simpsons");

  const changeKeyword = () => {};

  return (
    <div className="App">
      <Navbar />
      <section className="app__content">
        {/* <Searcher /> */}
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
