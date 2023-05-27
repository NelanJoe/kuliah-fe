import styled from "styled-components";

const StyledNavbar = styled.header`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
  }

  div {
    margin-bottom: 1rem;
  }

  div a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 2.4rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }

  @media only screen and (min-width: 768px) {
    nav {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    div {
      margin-bottom: 0;
    }

    ul {
      flex-direction: row;
    }

    ul a {
      font-size: 1.4rem;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

export default StyledNavbar;
