import styled from "styled-components";

export const ToggleWrapper = styled.div`
  margin-left: 0.3rem;
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.bg.lift};
  top: 100%;
  left: -3px;
  padding: 0.2em;
  border-radius: 0.3em;
`;