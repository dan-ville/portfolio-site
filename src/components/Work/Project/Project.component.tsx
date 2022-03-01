import { useNavigate, useParams } from "react-router-dom"
import GithubIcon from "../../../assets/SVG/Github"
import Button from "../../../assets/UI/Button"
import { PageWidth } from "../../Layout/Layout"
import projects from "../projects/projects"

import {
  Title,
  FeaturedThumbnail,
  Header,
  Description,
  Controls,
  GithubAnchor,
} from "./Project.styles"

type ProjectParams = {
  projectId: string
}
const Project: React.FC = () => {
  const navigate = useNavigate()
  const { projectId } = useParams<ProjectParams>()

  if (!projectId) return null

  const project = projects[parseInt(projectId) - 1]
  const { heading, src, description, url, github, closedSource } = project

  const goToPrevious = () => {
    if (parseFloat(projectId) === 1) return
    navigate(`/work/${parseFloat(projectId) - 1}`)
  }
  const goToAll = () => {
    navigate("/work")
  }
  const goToNext = () => {
    if (parseFloat(projectId) === projects.length) return
    navigate(`/work/${parseFloat(projectId) + 1}`)
  }

  return (
    <PageWidth>
      <Controls>
        <Button onClick={goToPrevious}>Previous</Button>
        <Button onClick={goToAll}>All Projects</Button>
        <Button onClick={goToNext}>Next</Button>
      </Controls>
      <Header>
        <Title>{heading}</Title>
        <p>
          {projectId}/{projects.length}
        </p>
      </Header>
      {closedSource ? (
        <em>**This project is closed source.</em>
      ) : (
        <p>
          <GithubAnchor href={github}>
            <GithubIcon fill="white" width="15" height="15" /> Visit Github repo
          </GithubAnchor>
        </p>
      )}
      <Description>{description}</Description>
      <small>*Click the image to visit the project page.</small>
      <a href={url}>
        <FeaturedThumbnail src={src} alt="preview of project" />
      </a>
    </PageWidth>
  )
}

export default Project
