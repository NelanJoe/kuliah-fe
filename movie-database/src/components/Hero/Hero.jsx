import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h4 className={styles.hero__title}>Spiderman Home Coming</h4>
          <p className={styles.hero__genre}>Action, Drama</p>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
            minus.
          </p>
          <button className={styles.hero__button}>Watch Me</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://source.unsplash.com/random/536x354"
            alt="hero-images"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
