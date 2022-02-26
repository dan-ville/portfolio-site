import styled from "styled-components"

export const StyledProfileCard = styled.div`
  margin: auto;
  color: ${(props) => props.theme.text.negative};
  max-width: 550px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bg.lift};
`

export const StyledCardHeader = styled.div`
  width: 100%;
  height: 33%;
  padding: 30px;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const StyledHeaderIcon = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.bg.lift};
  overflow: hidden;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`

export const StyledProfilePic = styled.img`
  object-fit: cover;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`
export const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const StyledEmail = styled.button`
  padding: 0.5rem 0.8rem;
  color: ${(props) => props.theme.text.main};
  background-color: ${(props) => props.theme.bg.lift};
  border: 2px solid ${(props) => props.theme.border};
  border-radius: 0.3em;
  font-size: ${(props) => props.theme.text.main};
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "📋 ";
  }
`

export const StyledTabPane = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const StyledTabWrapper = styled.div`
  display: flex;
  @media (max-width: 600px) {
    overflow-x: scroll;
  }
`
export const StyledTab = styled.button`
  padding: 0.5em 1em;
  margin-right: 3px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  color: ${(props) => props.theme.text.negative};
  background-color: ${(props) => props.theme.bg.negative};

  border-top-left-radius: 10px;
  border-top-right-radius: 20px;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`
export const StyledActivetab = styled.div`
  padding: 1.5rem;

  color: ${(props) => props.theme.text.negative};
  background-color: ${(props) => props.theme.bg.negative};
`
export const StyledSub = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`

export const StyledHeading = styled.h3`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 1em 0;
`
export const StyledItem = styled.p`
  font-size: 1rem;
`
