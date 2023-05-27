import StyledFooter from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h4>Movie App</h4>
        <p>Copyright &copy; By Nelan {new Date().getFullYear()}</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
