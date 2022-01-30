import { useNavigate } from "react-router-dom";
import { StyledTitle } from "../../Layout/Layout";
import ProjectCard from "../Card/Card.component";
import projects from "../projects/projects"
import { ProjectsWrapper } from "../Work.styles";

const ProjectsList = () => {
  const navigate = useNavigate();

  return (
    <ProjectsWrapper>
      <StyledTitle>Projects</StyledTitle>
      {projects.map((project) => (
        <ProjectCard
          key={project.index}
          project={project}
          onClick={() => navigate(`/Work/${project.index}`)}
        />
      ))}
    </ProjectsWrapper>
  );
};
export default ProjectsList;
