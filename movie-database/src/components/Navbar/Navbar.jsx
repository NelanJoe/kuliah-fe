import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <a href="#">Movie App</a>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <a href="#">Home</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Add Movie</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Popular</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Top Ranks</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
