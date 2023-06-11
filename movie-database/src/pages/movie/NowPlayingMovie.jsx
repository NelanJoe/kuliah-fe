import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constats/endpoints";

const NowPlayingMovie = () => {
  const [movies, setMovies] = useState([]);

  const getNowPlayingMovies = async () => {
    const { data } = await axios.get(ENDPOINTS.NOW_PLAYING);
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
