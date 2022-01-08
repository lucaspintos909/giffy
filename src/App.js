import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="app__content">
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
