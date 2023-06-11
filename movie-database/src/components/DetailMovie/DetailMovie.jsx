import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyledDetailMovie from "./StyledDetailMovie";

const DetailMovie = () => {
  // get id movie with params
  const { id } = useParams();
  const { VITE_API_KEY: API_KEY } = import.meta.env;

  const [movie, setMovie] = useState("");

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  const getDetailMovie = async () => {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;

    const { data } = await axios(URL);

    setMovie(data);
  };

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <a href={trailer} target="_blank">
          Watch
        </a>
      </div>
    </StyledDetailMovie>
  );
};

export default DetailMovie;
