import React, { useState } from "react";
import "./App.css";

import ListOfGifs from "./components/ListOfGifs";
import Searcher from "./components/Searcher/Searcher";

function App() {
  const [keyword, setKeyword] = useState("Simpsons");

  const changeKeyword = () => {};

  return (
    <div className="App">
      <section className="app__content">
        <Searcher/>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
