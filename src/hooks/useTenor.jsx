//Api de Gifs
import { useState, useEffect } from "react";

const API_KEY = "AIzaSyAoUqRhAyOlRDZrqnuMk-aqRreSv-CsjCU";

export const useTenorGif = (query) => {
  const [gifUrl, setGifUrl] = useState("");

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const response = await fetch(
          `https://tenor.googleapis.com/v2/search?q=${query}&key=${API_KEY}&limit=1`,
        );
        const data = await response.json();
        setGifUrl(data.results[0].media_formats.gif.url);
      } catch (error) {
        console.error("Error al obtener el GIF de Tenor:", error);
      }
    };
    fetchGif();
  }, [query]);

  return gifUrl;
};
export default useTenorGif;
