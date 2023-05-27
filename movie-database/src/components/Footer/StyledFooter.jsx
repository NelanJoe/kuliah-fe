import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media only screen and (min-width: 768px) {
    div {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    h4 {
      font-size: 1.8rem;
      margin-bottom: 0;
    }

    p {
      margin-bottom: 0;
    }
  }
`;

export default StyledFooter;
