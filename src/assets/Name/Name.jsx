import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledName = styled.a`
  color: ${(props) => props.theme.text.main};
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  transition: color 0.7s ease;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accent};
  }
`;

export const Name = () => {
  return (
    <StyledName as={Link} to="/home">
      Daniel Villegas
    </StyledName>
  );
};
