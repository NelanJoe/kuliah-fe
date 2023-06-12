import styled, { css } from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 0.6rem;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  background-color: ${({ variant, theme }) =>
    theme.colors[variant] || theme.colors.primary};

  text-decoration: none;

  ${({ size, theme }) => theme.size[size] || theme.size.md}

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
