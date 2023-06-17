import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const Home = ({ movies }) => {
  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
};

export default Home;
