import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/movies/moviesSlice";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const getRecomendationsMovies = async () => {
    const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

    const { data } = await axios(URL);

    dispatch(updateMovies(data.results));
  };

  useEffect(() => {
    getRecomendationsMovies();
  }, []);

  return (
    <>
      <DetailMovie />
      <Movies title={"Recommendations Movies"} />
    </>
  );
};

export default Detail;
