import GiphyEmbed from "../../assets/GIF/GiphyEmbed"
import Link from "../../assets/UI/Link"
import { PageContent, PageWidth, StyledTitle } from "../Layout/Layout"
import { Grid } from "./Contact.styles"

const Contact = () => {
  return (
    <PageWidth>
      <PageContent>
        <StyledTitle>Contact me</StyledTitle>
        <Grid>
          <Link size="large" text="d.villegas@visiontravel.net" />
          <Link size="large" text="+1-786-483-5337" />
          <GiphyEmbed src="https://giphy.com/embed/lp0k7hYzMYrsfbxmxJ" />
        </Grid>
      </PageContent>
    </PageWidth>
  )
}

export default Contact
