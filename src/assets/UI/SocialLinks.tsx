import styled from "styled-components"
import Figma from "../SVG/Figma"
import GithubIcon from "../SVG/Github"

export const StyledLink = styled.a`
  color: ${(props) => props.theme.text.main};
  font-weight: 500;
  text-align: right;
  padding: 0.5rem 0.8rem;
  &:hover {
    cursor: pointer;
  }
  text-decoration: none;
`
const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`
const SocialLinks = () => {
  return (
    <Container>
      <StyledLink href="https://github.com/dan-ville">
        <GithubIcon fill="#fff" />
      </StyledLink>
      <StyledLink href="https://www.figma.com/@techtarzan">
        <Figma fill="#fff" />
      </StyledLink>
    </Container>
  )
}

export default SocialLinks
