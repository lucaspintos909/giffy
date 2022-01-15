import React, { useState } from "react";

const Context = React.createContext({});

export default Context;

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  const [lastKeyword, setLastKeyword] = useState("");

  return (
    <Context.Provider value={{ gifs, setGifs, lastKeyword, setLastKeyword }}>
      {children}
    </Context.Provider>
  );
}
