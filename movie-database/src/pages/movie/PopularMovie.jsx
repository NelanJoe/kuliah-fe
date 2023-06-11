import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constats/endpoints";

const PopularMovie = () => {
  const [movies, setMovies] = useState([]);

  const getPopularMovies = async () => {
    const { data } = await axios.get(ENDPOINTS.POPULAR);

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
