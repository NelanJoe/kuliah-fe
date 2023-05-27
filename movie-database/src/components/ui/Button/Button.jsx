import styled, { css } from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 0.6rem;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};

  ${(props) =>
    props.full &&
    css`
      width: 100%;
      display: block;
    `}

  &:hover {
    background-color: #5574ff;
  }
`;

export default Button;
