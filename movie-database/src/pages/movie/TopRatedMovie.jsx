import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constats/endpoints";

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);

  const getTopRatedMovies = async () => {
    const { data } = await axios(ENDPOINTS.TOP_RATED);

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
