import Mack from "../../assets/SVG/Mack";

import { PageWidth, Section, StyledTitle } from "../Layout/Layout";

import {
  StyledIntro,
  StyledPitch,
  MackIntro,
  CTA,
  CTAButton,
} from "./Home.styles";

const Home = () => {
  return (
    <Section>
      <PageWidth>
        <StyledTitle>Greetings!</StyledTitle>
        <StyledIntro>
          <StyledPitch>
            My name is Daniel. I love designing platforms and services that
            deliver value to people.
          </StyledPitch>
          <Mack size="sm" />
          <MackIntro>
            This is Mack. He adds no SEO value but he's funny to look at.
          </MackIntro>
        </StyledIntro>
        <CTA>
          <CTAButton>See my work</CTAButton>
        </CTA>
      </PageWidth>
    </Section>
  );
};

export default Home;
