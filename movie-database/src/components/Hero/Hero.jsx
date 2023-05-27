import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";
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
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h4 className={styles.hero__title}>{movie.Title}</h4>
          <p className={styles.hero__genre}>{movie.Genre}</p>
          <p className={styles.hero__description}>{movie.Plot}</p>
          {/* <button className={styles.hero__button}>Watch Me</button> */}
          <Button>Watch Me</Button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt="hero-images"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
