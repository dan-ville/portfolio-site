import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  text-align: center;

  padding: 0.5em 1em;
  margin: 1rem 0;
  transition: all 0.5s ease;

  color: ${(props) => props.theme.text.main};
  background-color: ${(props) => props.theme.bg.base};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0.2em;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.accent};
  }
`;

export default Button;
