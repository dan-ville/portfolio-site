import { useNavigate, useParams } from "react-router-dom";
import Button from "../../assets/UI/Button";
import projects from "../../projects/projects";
import {
  Title,
  FeaturedThumbnail,
  Header,
  Description,
  Controls,
} from "./Project.styles";

const Project = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const project = projects[projectId - 1];
  const { heading, src, description, url } = project;

  const goToPrevious = () => {
    if (parseFloat(projectId) === 1) return;
    navigate(`/work/${parseFloat(projectId) - 1}`);
  };
  const goToAll = () => {
    navigate("/work");
  };
  const goToNext = () => {
    if (parseFloat(projectId) === projects.length) return;
    navigate(`/work/${parseFloat(projectId) + 1}`);
  };

  return (
    <>
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
      <Description>{description}</Description>
      <small>*Click the image to visit the project page.</small>
      <a href={url}>
        <FeaturedThumbnail src={src} alt="preview of project" />
      </a>
    </>
  );
};

export default Project;
