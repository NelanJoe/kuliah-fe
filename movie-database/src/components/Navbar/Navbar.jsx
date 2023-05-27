import { Link } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <Link to="/">Movie App</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie/create">Add Movie</Link>
          </li>
          <li>
            <Link to="/movie/popular">Popular</Link>
          </li>
          <li>
            <Link to="/movie/now-playing">Now Playing</Link>
          </li>
          <li>
            <Link to="/movie/top">Top Rated</Link>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
