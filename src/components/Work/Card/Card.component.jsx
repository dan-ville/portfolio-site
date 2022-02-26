import { Card, CardText, ProjectTitle, Thumbnail, Explore } from "./Card.styles"

const ProjectCard = (props) => {
  const { project } = props
  return (
    <Card {...props}>
      <CardText>
        <div>
          <ProjectTitle>{project.heading}</ProjectTitle>
          <p>{project.description}</p>
        </div>
        <Explore>Click to explore</Explore>
      </CardText>
      <Thumbnail src={project.src} />
    </Card>
  )
}

export default ProjectCard
