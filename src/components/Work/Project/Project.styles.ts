import styled from "styled-components"

export const Title = styled.h2`
  font-size: 2rem;
  /* margin-bottom: 1rem; */
`

export const FeaturedThumbnail = styled.img`
  width: 100%;
  object-fit: cover;
  border: 3px solid ${(props) => props.theme.text.main};
  border-radius: 0.3em;
  margin: 1rem 0;
  @media (max-width: 700px) {
    width: 100%;
    border-radius: 0.3em;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
`
export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
export const GithubAnchor = styled.a`
  color: ${(props) => props.theme.text.main};
  &:hover {

  }
`
