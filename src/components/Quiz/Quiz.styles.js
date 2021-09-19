import styled from "styled-components";

export const QuizWrapper = styled.section`
  padding: 2rem 0;
  display: grid;
  color: ${(props) => props.theme.text.main};
  place-items: center;
`;
export const QuizHeading = styled.h2`
  margin-bottom: 1rem;
`;
export const FormWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.border};
  padding: 1.5rem;
  border-radius: 0.2em;
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
`
export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;
