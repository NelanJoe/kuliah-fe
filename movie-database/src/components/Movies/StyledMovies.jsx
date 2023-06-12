import styled from "styled-components";

const StyledMovies = styled.section`
  margin: 1rem;

  .container {
    margin: 4rem 0;
  }

  .title {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
    text-align: center;
  }

  .movies {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  @media only screen and (min-width: 768px) {
    .movies {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
    }
  }
`;

export default StyledMovies;
