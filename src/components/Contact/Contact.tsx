import Link from "../../assets/UI/Link"
import { PageContent, PageWidth, StyledTitle } from "../Layout/Layout"
import { Grid } from "./Contact.styles"

const Contact = () => {
  return (
    <PageWidth>
      <PageContent>
        <Grid>
          <StyledTitle>Contact me</StyledTitle>
          <Link size="large" text="d.villegas@visiontravel.net" />
          <Link size="large" text="+1-786-483-5337" />
        </Grid>
      </PageContent>
    </PageWidth>
  )
}

export default Contact
