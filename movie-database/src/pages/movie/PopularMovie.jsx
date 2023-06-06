import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const { VITE_API_KEY: API_KEY } = import.meta.env;

  const getPopularMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    const { data } = await axios(URL);

    setMovies(data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title={"Popular Movies"} />
    </>
  );
};

export default PopularMovie;
