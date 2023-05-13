import { useState } from "react";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import Navbar from "../../components/Navbar/Navbar";
import data from "../../data/utils/data";

const Home = () => {
  const [movies, setMovies] = useState(data);

  return (
    <>
      <Hero />
      <Movies movies={movies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  );
};

export default Home;
