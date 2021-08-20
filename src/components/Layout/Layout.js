import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg.base};
`;
export const PageWidth = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
export const PageContent = styled.div`
  padding: 1rem;
`;
export const Section = styled.section`
  padding: 2.5rem;
  background-color: ${props => props.theme.bg.base};
  /* border-bottom: 1px solid ${props => props.theme.border}; */
`;
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const StyledTitle = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-size: 3rem;
  color: ${(props) => props.theme.text.main};
`;