import styled from "styled-components";

const StyledMovie = styled.div`
  .movie {
    margin-bottom: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    border-radius: 0.4rem;
    width: 250px;
  }

  .movie__image {
    object-fit: cover;
    margin-bottom: 1rem;
    max-width: 100%;
  }

  .movie__body {
    padding: 0 1rem;
    padding-bottom: 1rem;
    text-align: center;
  }

  .movie__body--title {
    color: #4731ee;
    font-size: 1.4rem;
  }

  .movie__body--date {
    font-weight: bold;
  }
`;

export default StyledMovie;