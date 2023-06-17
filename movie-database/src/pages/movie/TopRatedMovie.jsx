import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constats/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/movies/moviesSlice";

const TopRatedMovie = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const { data } = await axios(ENDPOINTS.TOP_RATED);

    dispatch(updateMovie(data.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title={"Top Rated Movies"} />
    </>
  );
};

export default TopRatedMovie;
