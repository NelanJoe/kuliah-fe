import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import StyledMovies from "./StyledMovies";

const Movies = ({ title }) => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <StyledMovies>
      <div className="container">
        <h2 className="title">{title || "Latest Movies"}</h2>
        <div className="movies">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </StyledMovies>
  );
};

export default Movies;
