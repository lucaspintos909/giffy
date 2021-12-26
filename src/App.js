import React, { useState } from "react";
import "./App.css";
import { Route } from "wouter";

import ListOfGifs from "./components/ListOfGifs";
import Searcher from "./components/Searcher/Searcher";

function App() {
  const [keyword, setKeyword] = useState("Simpsons");

  const changeKeyword = () => {};

  return (
    <div className="App">
      <section className="app__content">
        <Searcher />
        <Route component={ListOfGifs} path="/gif/:keyword"/>
      </section>
    </div>
  );
}

export default App;
