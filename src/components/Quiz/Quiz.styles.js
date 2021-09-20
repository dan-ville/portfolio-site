import styled from "styled-components";

export const QuizWrapper = styled.section`
  padding: 2rem 0;
  display: grid;
  color: ${(props) => props.theme.text.main};
  place-items: center;
`;
export const Category = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.accent};
`;
export const QuizHeading = styled.h2`
  margin-bottom: 1rem;
`;
export const QuizTip = styled.span`
  padding: 0.5rem 0;
  font-size: 0.8rem;
`;
export const FormWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.border};
  padding: 0.5rem 1.5rem;
  border-radius: 0.2em;
  width: clamp(300px, 90%, 500px);
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
export const RadioGroup = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;
export const RadioLabel = styled.label`
  padding-left: 1rem;
`;
export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
export const FormControls = styled.div`
  display: flex;
  justify-content: space-between;
`;
