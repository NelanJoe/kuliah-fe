import { useState } from "react";
import data from "../../data/utils/data";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

const Movies = () => {
  const [movies, setMovies] = useState(data);

  const uniqueID = () => {
    return Math.floor(Math.random() * 100);
  };

  const handleClick = () => {
    const movie = {
      id: nanoid(10),
      title: "Spiderman Far From Home",
      poster: "https://source.unsplash.com/random/300x400",
      year: new Date().getFullYear(),
      type: "movie",
    };

    return setMovies([...movies, movie]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
};

export default Movies;
