import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";
import Select from "../Alert/Select";

const AddMovieForm = ({ movies, setMovies }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("movie");

  const [isTitleError, setTitleError] = useState(false);
  const [isDateError, setDateError] = useState(false);

  const genres = [
    {
      label: "Action",
      value: "action",
    },
    {
      label: "Drama",
      value: "drama",
    },
    {
      label: "Comedy",
      value: "comedy",
    },
    {
      label: "Horror",
      value: "horror",
    },
  ];

  const handleInput = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleDate = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  const handleGenre = (e) => {
    const { value } = e.target;
    setGenre(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      setTitleError(true);
    } else if (date === "") {
      setDateError(true);
    } else {
      const newMovie = {
        id: nanoid(10),
        title: title,
        year: date,
        poster: "https://picsum.photos/300/400",
        type: genre,
      };

      setMovies([...movies, newMovie]);

      setTitleError(false);
      setDateError(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="hero-images"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movies</h2>
          <form
            action=""
            className={styles.form__container}
            onSubmit={handleSubmit}
          >
            <div className={styles.form__group}>
              <label htmlFor="">Title</label>
              <input
                name="title"
                type="text"
                value={title}
                onChange={handleInput}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="">Date</label>
              <input
                name="date"
                type="number"
                value={date}
                onChange={handleDate}
              />
              {isDateError && <Alert>Date wajib diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <Select
                label={"Select Genre"}
                options={genres}
                value={genre}
                onChange={handleGenre}
              />
            </div>
            <button className={styles.form__btn}>Add Movie</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovieForm;
