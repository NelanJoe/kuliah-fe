import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./StyledHero";
const Hero = () => {
  const [movie, setMovie] = useState("");
  const url = `https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590`;

  const fetchMovie = async () => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    setMovie(data);
  };

  useEffect(() => {
    fetchMovie(url);
  }, []);

  return (
    <StyledHero>
      <div className="hero">
        <div className="hero__left">
          <h4 className="hero__title">{movie.Title}</h4>
          <p className="hero__genre">{movie.Genre}</p>
          <p className="hero__description">{movie.Plot}</p>
          <Button>Watch Me</Button>
        </div>
        <div className="hero__right">
          <img className="hero__image" src={movie.Poster} alt="hero-images" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
