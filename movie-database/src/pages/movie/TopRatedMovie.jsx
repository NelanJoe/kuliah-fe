import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);

  const { VITE_API_KEY: API_KEY } = import.meta.env;

  const getTopRatedMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    const { data } = await axios(URL);

    setMovies(data.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title={"Top Rated Movies"} />
    </>
  );
};

export default TopRatedMovie;
