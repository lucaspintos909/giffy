import React, { useState } from "react";
import "./App.css";
import { Route } from "wouter";

import ListOfGifs from "./components/ListOfGifs";
import Searcher from "./components/Searcher";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [keyword, setKeyword] = useState("Simpsons");

  const changeKeyword = () => {};

  return (
    <div className="App">
      <section className="app__content">
        <Navbar />
        <Searcher />
        <Route component={Home} path="/" />
        <Route component={ListOfGifs} path="/search/:keyword" />
      </section>
    </div>
  );
}

export default App;
