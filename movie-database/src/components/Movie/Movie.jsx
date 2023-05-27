import "./StyledMovie";
import StyledMovie from "./StyledMovie";

const Movie = ({ title, year, poster }) => {
  return (
    <StyledMovie>
      <div className="movie">
        <img className="movie__image" src={poster} alt={title} />
        <div className="movie__body">
          <h4 className="movie__body--title">{title}</h4>
          <p className="movie__body--date">{year}</p>
        </div>
      </div>
    </StyledMovie>
  );
};

export default Movie;
