import Global from "../../components/Global/Global";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Province from "../../components/Province/Province";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Global />
        <Province />
      </main>
    </>
  );
};

export default Home;
