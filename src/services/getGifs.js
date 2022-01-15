import { API_KEY, API_URL } from "./settings";

export default function getGifs({ keyword, limit = 25, page = 0 }) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized;
        return { id, title, url };
      });
      return gifs;
    });
}
