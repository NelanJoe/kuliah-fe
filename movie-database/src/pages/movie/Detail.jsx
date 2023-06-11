import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";

const Detail = () => {
  const { id } = useParams();
  const { VITE_API_KEY: API_KEY } = import.meta.env;

  const [movies, setMovies] = useState([]);

  const getRecomendationsMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

    const { data } = await axios(URL);
    setMovies(data.results);
  };

  useEffect(() => {
    getRecomendationsMovies();
  }, []);

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title={"Recommendations Movies"} />
    </>
  );
};

export default Detail;
