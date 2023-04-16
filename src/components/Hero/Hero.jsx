import heroImg from "../../assets/img/hero.png";
import "./Hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h1 className="hero__left__title">Covid ID</h1>
        <p className="hero__left__subtitle">Monitoring Perkembangan Covid</p>
        <p className="hero__left__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quae autem aliquid, at tenetur aut, voluptatum totam aliquam debitis
          accusantium adipisci eius, quam cumque? Nam quibusdam odio vel nihil,
          distinctio mollitia reiciendis ratione possimus maiores.
        </p>
        <button className="hero__left__btn">Vaccine</button>
      </div>
      <div className="hero__right">
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
