import styled from "styled-components";
// import { themes } from "../../../theme/theme";

export const StyledBio = styled.p`
  line-height: 1.5;
  text-align: justify;
`;
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  border-radius: 25px;
  margin: 1rem auto;
`;
export const StyledFormHint = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7rem;
`;
export const StyledRadioInput = styled.input`
  appearance: none;
`;
export const StyledLabel = styled.label`
  font-size: 1rem;
  padding: 0.3em 0.5em;
  border: 1px solid ${(props) => props.theme.bg.lift};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.text.main};
    background-color: ${(props) => props.theme.bg.lift};
  }
  ${StyledRadioInput}:checked {
    background-color: ${(props) => props.theme.bg.lift};
  }
`;
export const StyledOptionGroup = styled.div`
`;
