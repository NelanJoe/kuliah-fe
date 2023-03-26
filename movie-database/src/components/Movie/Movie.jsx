import styles from "./Movie.module.css";

const Movie = () => {
  const date = new Date().getUTCDate();
  const years = new Date().getFullYear();

  return (
    <div className={styles.movie}>
      <img
        className={styles.movie__image}
        src="https://source.unsplash.com/random/300x400"
        alt=""
      />
      <div className={styles.movie__body}>
        <h4 className={styles.movie__body__title}>Movie Title</h4>
        <p className={styles.movie__body__date}>{`${date} / ${years}`}</p>
      </div>
    </div>
  );
};

export default Movie;
