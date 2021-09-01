import { ProjectsWrapper } from "./Work.styles";
import { PageContent } from "../Layout/Layout";
import projects from "./projects";
import ProjectCard, { Featured } from "./Card/Card.component";

const Work = () => {
  return (
    <PageContent>
      <Featured project={projects[0]} />
      <ProjectsWrapper>
        {projects.map((project, index) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </ProjectsWrapper>
    </PageContent>
  );
};

export default Work;
