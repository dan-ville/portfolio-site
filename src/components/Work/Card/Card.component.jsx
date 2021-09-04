import {
  Card,
  CardText,
  ProjectTitle,
  Thumbnail,
  Explore,
  FeaturedCard,
  FeaturedText,
  FeaturedThumbnail,
  FeaturedExplore,
  FeaturedSpan,
} from "./Card.styles";

// ! Change Explore to React Router Links

const ProjectCard = ({ project, callback }) => {
  return (
    <Card onClick={callback}>
      <CardText>
        <ProjectTitle>{project.heading}</ProjectTitle>
        <p>{project.description}</p>
        <Explore>Click to explore</Explore>
      </CardText>
      <Thumbnail src={project.src} />
    </Card>
  );
};

export const Featured = ({ project }) => {
  return (
    <FeaturedCard >
      <FeaturedText>
        <ProjectTitle>{project.heading}</ProjectTitle>
        <p>{project.description}</p>
        <FeaturedExplore>
          <em>Featured Project</em>
        </FeaturedExplore>
        <FeaturedSpan>Click to explore</FeaturedSpan>
      </FeaturedText>
      <FeaturedThumbnail src={project.src} />
    </FeaturedCard>
  );
};

export default ProjectCard;
