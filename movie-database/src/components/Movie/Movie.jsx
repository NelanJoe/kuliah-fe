import "./StyledMovie";
import StyledMovie from "./StyledMovie";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <StyledMovie>
      <div className="movie">
        <div className="movie__images__wrapper">
          <img
            className="movie__image"
            src={
              movie.poster ||
              `https://images.tmdb.org/t/p/w300/${movie.poster_path}`
            }
            alt={movie.title}
          />
        </div>
        <div className="movie__body">
          <Link to={`/movie/${movie.id}`}>
            <h4 className="movie__body--title">{movie.title}</h4>
          </Link>
          <p className="movie__body--date">
            {movie.year || movie.release_date}
          </p>
        </div>
      </div>
    </StyledMovie>
  );
};

export default Movie;
