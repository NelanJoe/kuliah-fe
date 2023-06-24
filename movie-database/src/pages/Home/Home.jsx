import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useEffect } from "react";
import { updateMovies } from "../../features/movies/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const moviesLocals = useSelector((state) => state.movies.moviesLocals);

  useEffect(() => {
    dispatch(updateMovies(moviesLocals));
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={moviesLocals} />
    </>
  );
};

export default Home;
