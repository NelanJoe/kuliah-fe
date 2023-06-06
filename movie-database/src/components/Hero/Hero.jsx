import { useEffect, useState } from "react";

import Button from "../ui/Button/Button";
import StyledHero from "./StyledHero";
import axios from "axios";

const Hero = () => {
  const [movie, setMovie] = useState("");

  // Env api key
  const { VITE_API_KEY: API_KEY } = import.meta.env;

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  /**
   * Fetch Trending Movies
   * @returns {trending movies}
   */
  const fetchTrendingMovie = async () => {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const { data } = await axios(URL);

    return data.results[0];
  };

  /**
   * Fetch Trending Movies
   * @returns {movies}
   */
  const fetchDetailMovie = async () => {
    const trendingMovie = await fetchTrendingMovie();
    const id = trendingMovie.id;

    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const { data } = await axios(URL);

    setMovie(data);
  };

  useEffect(() => {
    fetchDetailMovie();
  }, []);

  return (
    <StyledHero>
      <div className="hero">
        <div className="hero__left">
          <h4 className="hero__title">{movie.title}</h4>
          <p className="hero__genre">{genres}</p>
          <p className="hero__description">{movie.overview}</p>
          {/* <Button>Watch Me</Button> */}
          <a
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
          >
            Watch Me
          </a>
        </div>
        <div className="hero__right">
          <img
            className="hero__image"
            src={`https://images.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
