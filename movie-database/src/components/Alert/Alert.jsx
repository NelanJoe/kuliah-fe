import styled from "styled-components";

const Alert = ({ children }) => {
  return <StyleAlert>{children}</StyleAlert>;
};

const StyleAlert = styled.span`
  color: red;
`;

export default Alert;
