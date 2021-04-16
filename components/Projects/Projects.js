import { useState } from "react";

import Project from "./Project";
import ProjectNav from "./ProjectNav";
import { OrangeLine } from "../Home/WhoAmI";
import { projects } from "./ProjectData";

import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

export const ProjectsContainer = styled.div`
  position: absolute;
  top: 300px;
  width: 100%;
  height: 500px;
  background: #051e3e;
  max-width: 800px;
  @media (max-width: 800px) {
    align-items: center;
  }

  @media (max-width: 414px) and (max-height: 667px) {
    top: 100px !important;
  }
  @media (max-height: 859px) {
    top: 250px;
  }
  @media (max-height: 760px) {
    top: 200px;
  }
`;

export const PageHeadline = styled.h1`
  color: white;
  text-align: center;
  position: absolute;
  top: 180px;
  font-family: "Inconsolata", monospace;
  width: 100%;

  @media (max-width: 414px) and (max-height: 667px) {
    top: 25px !important;
  }

  @media (max-height: 760px) {
    top: 125px;
  }
`;

function Projects() {
  const [projectNumber, setProjectNumber] = useState(0);

  return (
    <PageContainer>
      <PageHeadline>
        Projects<OrangeLine></OrangeLine>
      </PageHeadline>
      <ProjectsContainer>
        <ProjectNav
          projects={projects}
          projectNumber={projectNumber}
          setProjectNumber={setProjectNumber}
        ></ProjectNav>
        <Project
          key={projects.id}
          projects={projects}
          projectNumber={projectNumber}
        ></Project>
      </ProjectsContainer>
    </PageContainer>
  );
}

export default Projects;
