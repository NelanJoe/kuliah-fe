import { useState } from "react";
import Global from "../../components/Global/Global";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Province from "../../components/Province/Province";
import data from "../../utils/constant/provinces";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Global />
        <Province provinces={provinces} />
        <Form provinces={provinces} setProvinces={setProvinces} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
