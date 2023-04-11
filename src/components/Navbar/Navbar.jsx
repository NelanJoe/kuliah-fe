import "./Navbar.styles.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          Covid ID
        </a>
        <div className="navbar__list">
          <a href="/" className="navbar__item">
            Global
          </a>
          <a href="/" className="navbar__item">
            Indonesia
          </a>
          <a href="/" className="navbar__item">
            Provinsi
          </a>
          <a href="/" className="navbar__item">
            About
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
