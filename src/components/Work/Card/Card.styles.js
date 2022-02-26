import styled from "styled-components";
// import Button from "../../../assets/UI/Button";

export const Card = styled.div`
  border: 1px solid white;
  margin: 1rem 0;
  color: ${(props) => props.theme.text.main};
  border-radius: 0.3em;
  overflow: hidden;
  background-color: ${props => props.theme.bg.lift};
  min-height: 180px;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    box-shadow: -5px 5px 0px ${(props) => props.theme.accent};
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const CardText = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
export const Thumbnail = styled.img`
  max-width: 200px;
  object-fit: cover;

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;
export const Explore = styled.span`
  margin-top: 1rem;
  display: block;
  font-size: 0.8rem;
`;
