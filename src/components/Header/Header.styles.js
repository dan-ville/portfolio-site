import styled from "styled-components";

export const HeaderStyled = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.bg.darker};
  color: ${(props) => props.theme.text.main};
  border-bottom: 1px solid ${(props) => props.theme.bg.light};
`;

export const HeaderWrapperStyled = styled.div`
  margin: 0 auto;
  
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavLinkStyled = styled.a`
  color: ${(props) => props.theme.text.main};
  margin-left: 0.3rem;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 600;
  border-radius: 0.2em;
  padding: 0.3em 0.8em;
  transition: all 0.7s ease;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.text.main};
    background-color: ${(props) => props.theme.bg.lift};
  }
`;
