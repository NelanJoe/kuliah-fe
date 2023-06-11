import styled from "styled-components";

const StyledDetailMovie = styled.div`
  margin: 3rem 1.3rem;

  display: flex;
  flex-direction: column;

  /* Poster */
  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
    border-radius: 0.6rem;
  }

  /* Info */
  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.danger};
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    align-items: center;

    img {
      object-position: top;
    }
  }
`;

export default StyledDetailMovie;
