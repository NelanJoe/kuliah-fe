import styles from "./AddMovieForm.module.css";

const AddMovieForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://source.unsplash.com/random/536x354"
            alt="hero-images"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movies</h2>
          <form action="" className={styles.form__container}>
            <div className={styles.form__group}>
              <label htmlFor="">Title</label>
              <input type="text" />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Date</label>
              <input type="text" />
            </div>
            <button className={styles.form__btn}>Add Movie</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
