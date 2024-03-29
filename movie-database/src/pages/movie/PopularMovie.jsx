import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constats/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movies/moviesSlice";

const PopularMovie = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const { data } = await axios(ENDPOINTS.POPULAR);

    dispatch(updateMovies(data.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <>
      <Hero />
      <Movies title={"Popular Movies"} />
    </>
  );
};

export default PopularMovie;
