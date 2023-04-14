import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="credit">
        <a link="/" className="logo">
          Covid ID
        </a>
        <p>
          Develop With <span style={{ color: "red" }}>&hearts;</span> By Nelan
        </p>
      </div>
      <div className="actions">
        <a href="/">Global</a>
        <a href="/">Indonesia</a>
        <a href="/">Provinsi</a>
        <a href="/">About</a>
      </div>
    </footer>
  );
};

export default Footer;
