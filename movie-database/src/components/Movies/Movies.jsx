import Movie from "../Movie/Movie";
import StyledMovies from "./StyledMovies";

const Movies = ({ movies }) => {
  return (
    <StyledMovies>
      <div className="container">
        <h2 className="title">Latest Movies</h2>
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
