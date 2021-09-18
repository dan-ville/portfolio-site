import { useState } from "react";
import { ProjectsWrapper, Controls, CurrentIndex } from "./Work.styles";
import { PageWidth, PageContent, StyledTitle } from "../Layout/Layout";
import projects from "./projects";
import ProjectCard, { Featured } from "./Card/Card.component";
import Button from "../../assets/UI/Button";

const Work = () => {
  const [projectsIndex, setProjectsIndex] = useState(0);
  const [showFeatured, setShowFeatured] = useState(false);

  const previous = () => {
    if (projectsIndex === 0) return;
    setProjectsIndex(projectsIndex - 1);
  };
  const all = () => {
    setShowFeatured(false);
  };
  const next = () => {
    if (projectsIndex === projects.length - 1) return;
    setProjectsIndex(projectsIndex + 1);
  };

  const handleSetFeatured = (index) => {
    setShowFeatured(true);
    setProjectsIndex(index);
  };

  return (
    <PageWidth>
      <PageContent>
        {showFeatured ? (
          <>
            <Controls>
              <Control callback={previous}>Previous</Control>
              <Control callback={all}>All Projects</Control>
              <Control callback={next}>Next</Control>
            </Controls>
            <CurrentIndex>
              <em>
                Project {projectsIndex + 1}/{projects.length}
              </em>
            </CurrentIndex>
            <Featured project={projects[projectsIndex]} />
          </>
        ) : (
          <ProjectsWrapper>
            <StyledTitle>Projects</StyledTitle>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.index}
                project={project}
                callback={() => handleSetFeatured(index)}
              />
            ))}
          </ProjectsWrapper>
        )}
      </PageContent>
    </PageWidth>
  );
};

const Control = ({ callback, children }) => {
  return <Button onClick={callback}>{children}</Button>;
};

export default Work;
