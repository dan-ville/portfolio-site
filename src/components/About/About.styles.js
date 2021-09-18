import styled from "styled-components";

export const StyledProfileCard = styled.div`
  margin: auto;
  color: ${(props) => props.theme.text.negative};
  max-width: 550px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bg.lift};
`;

export const StyledCardHeader = styled.div`
  width: 100%;
  height: 33%;
  padding: 30px;

  /* color: ${(props) => props.theme.bg.darkest}; */
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledHeaderIcon = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.bg.lift};
  overflow: hidden;
`;

export const StyledProfilePic = styled.img`
  object-fit: cover;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledTabPane = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StyledTabWrapper = styled.div`
  display: flex;
`;
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
`;

export const StyledActivetab = styled.div`
  padding: 1.5rem;

  color: ${(props) => props.theme.text.negative};
  background-color: ${(props) => props.theme.bg.negative};
`;

export const StyledSub = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
