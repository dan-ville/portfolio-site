import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  max-width: 75ch;
  margin: 0 auto;
`;
export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CurrentIndex = styled.p`
  padding-top: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.text.main};
`;
