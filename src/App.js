import React, { useEffect, useState } from "react";
import "./App.css";

const apiURL =
  "https://api.giphy.com/v1/gifs/search?api_key=ilH61ZakLMNx7CdP457gQ4DLRn7ihoOR&q=pandas&limit=25&offset=0&rating=g&lang=en";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        const resGifs = data.map((image) => image.images.downsized_medium.url);
        setGifs(resGifs);
      });
  }, []);

  return (
    <div className="App">
      <section className="app__content">
        {gifs.map((gif) => (
          <img src={gif} />
        ))}
      </section>
    </div>
  );
}

export default App;
