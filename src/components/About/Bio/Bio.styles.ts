import styled from "styled-components"

export const StyledBio = styled.p`
  line-height: 1.5;
  text-align: justify;
`
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  border-radius: 25px;
  margin: 1rem auto;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`
export const StyledFormHint = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7rem;
`
export const Select = styled.select`
  padding: 0.3em;
`
