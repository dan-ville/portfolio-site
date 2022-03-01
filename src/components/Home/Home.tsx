import { useNavigate } from "react-router-dom"
import { PageWidth, Section, StyledTitle } from "../Layout/Layout"
import {
  StyledIntro,
  StyledPitch,
  CTA,
  CTAButton,
  Photo,
  PhotoWrapper,
} from "./Home.styles"
import profile from "../../assets/img/Profile2022.jpg"

const Home = () => {
  const navigate = useNavigate()
  return (
    <Section>
      <PageWidth>
        <StyledTitle>Greetings!</StyledTitle>
        <StyledIntro>
          <StyledPitch>
            My name is Daniel. I love designing platforms and services that
            deliver value to people.
          </StyledPitch>
          <PhotoWrapper>
            <Photo src={profile} />
          </PhotoWrapper>
        </StyledIntro>
        <CTA>
          <CTAButton onClick={() => navigate("/work")}>See my work</CTAButton>
        </CTA>
      </PageWidth>
    </Section>
  )
}

export default Home
