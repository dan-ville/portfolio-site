import styled from "styled-components";

export const StyledPitch = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;
export const StyledIntro = styled.div`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  max-width: clamp(45ch, 50%, 75ch);
  color: ${(props) => props.theme.text.main};
`;
export const MackIntro = styled.p`
  color: ${(props) => props.theme.text.main};
  font-size: 0.8rem;
  margin-top: 2rem;
`;