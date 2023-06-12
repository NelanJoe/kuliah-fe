import styled from "styled-components";

const StyledMovie = styled.div`
  .movie {
    margin-bottom: 1rem;
    border-radius: 0.4rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
  }

  .movie__images__wrapper {
    overflow: hidden;
  }

  .movie__image {
    object-fit: cover;
    margin-bottom: 1rem;
    max-width: 100%;
    transition: all ease-in-out 0.5s;
  }

  .movie__image:hover {
    scale: 1.2;
  }

  .movie__body {
    padding: 0 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }

  .movie__body a {
    text-decoration: none;
  }

  .movie__body--title {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
  }

  .movie__body--title:hover {
    color: ${({ theme }) => theme.colors.danger};
  }

  .movie__body--date {
    font-weight: bold;
  }

  @media only screen and (min-width: 768px) {
    .movie {
      width: 250px;
    }
  }
`;

export default StyledMovie;
