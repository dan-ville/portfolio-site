import styled from "styled-components"
import Button from "../../assets/UI/Button"

export const StyledPitch = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`
export const StyledIntro = styled.div`
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  max-width: clamp(45ch, 50%, 75ch);
  color: ${(props) => props.theme.text.main};
`
export const MackIntro = styled.p`
  color: ${(props) => props.theme.text.main};
  font-size: 0.8rem;
  margin-top: 2rem;
`
export const CTA = styled.div`
  /* border: 1px solid white; */
  padding: 3rem 0;
  display: grid;
  place-items: center;
`
export const CTAButton = styled(Button)`
  font-size: 1.5rem;
  margin: 0 1rem;
`
export const PhotoWrapper = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
`
export const Photo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
