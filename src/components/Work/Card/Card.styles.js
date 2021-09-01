import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid white;
  margin: 1rem 0;
  color: ${(props) => props.theme.text.main};
  display: flex;
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
export const FeaturedCard = styled.div`
  max-width: 1000px;
  margin: 1rem auto;
  color: ${(props) => props.theme.text.main};
  display: flex;
  flex-wrap: wrap;
  border: 10px solid ${(props) => props.theme.accent};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
export const FeaturedText = styled.div`
  padding: 1rem;
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
`;
export const FeaturedThumbnail = styled.img`
  width: 50%;
  object-fit: cover;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const FeaturedExplore = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: auto;
`;
export const FeaturedSpan = styled.span`
  font-size: 1rem;
  margin-top: 1rem;
`;