import styled from "styled-components";

const StyledButton = styled.a`
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;
  text-align: center;

  padding: 0.5em 1em;
  margin: 1rem 0;

  background: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.text.dark};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 0.2em;
`;

export default StyledButton;
