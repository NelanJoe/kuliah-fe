import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constats/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/movies/moviesSlice";

const NowPlayingMovie = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const { data } = await axios(ENDPOINTS.NOW_PLAYING);
    // setMovies(data.results);

    console.log(data.results);
    dispatch(updateMovie(data.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title={"Now Playing Movies"} />
    </>
  );
};

export default NowPlayingMovie;
