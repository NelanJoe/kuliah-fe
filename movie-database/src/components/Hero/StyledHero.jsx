import styled from "styled-components";

const StyledHero = styled.section`
  margin: 1rem;

  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__title {
    color: #4361ee;
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
  }

  .hero__genre {
    color: red;
    margin-bottom: 1rem;
    font-size: 1.59rem;
    font-weight: 600;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .hero__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4631ee;
    color: #fff;

    font-weight: 600;
  }

  .hero__button:hover {
    background-color: #fff;
    border: 1px solid#4361ee;
    color: #4361ee;
  }

  .hero__image {
    max-width: 100%;
    height: auto;
    border-radius: 0.8rem;
  }
  /* Medium Screen */
  @media only screen and (min-width: 768px) {
    .hero {
      margin-top: 2.4rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      text-align: left;
    }

    .hero__left {
      flex-basis: 58%;
    }

    .hero__title {
      font-size: 2.4rem;
    }
  }
`;

export default StyledHero;
