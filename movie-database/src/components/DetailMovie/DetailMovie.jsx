import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyledDetailMovie from "./StyledDetailMovie";
import ENDPOINTS from "../../utils/constats/endpoints";
import Button from "../ui/Button/Button";

const DetailMovie = () => {
  // get id movie with params
  const { id } = useParams();

  const [movie, setMovie] = useState("");

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");

  const trailer =
    movie &&
    `https://www.youtube.com/watch?v=${
      movie.videos.results[0]?.key ?? "a9tq0aS5Zu8"
    }`;

  const getDetailMovie = async () => {
    const { data } = await axios(ENDPOINTS.DETAIL(id));

    setMovie(data);
  };

  useEffect(() => {
    getDetailMovie();
  }, [id]);

  return (
    <StyledDetailMovie>
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path ?? ""}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <h4>{movie.release_date}</h4>
        <Button as="a" href={trailer} target="_blank">
          Watch
        </Button>
      </div>
    </StyledDetailMovie>
  );
};

export default DetailMovie;
