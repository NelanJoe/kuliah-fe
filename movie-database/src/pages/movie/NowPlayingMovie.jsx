import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const NowPlayingMovie = () => {
  const [movies, setMovies] = useState([]);

  const { VITE_API_KEY: API_KEY } = import.meta.env;

  const getNowPlayingMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

    const { data } = await axios(URL);

    setMovies(data.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title={"Now Playing Movies"} />
    </>
  );
};

export default NowPlayingMovie;
