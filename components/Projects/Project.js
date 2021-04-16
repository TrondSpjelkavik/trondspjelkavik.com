import styled from "styled-components";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";

export const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  margin: 80px 0 0 20px;
  font-family: "Inconsolata", monospace;

  @media (max-width: 800px) {
    align-items: center;
    margin: 100px 0 0 20px;
  }
`;

export const ProjectInfoHeadline = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

export const ProjectInfoParagraph = styled.p`
  color: white;
  max-width: 350px;
  font-size: 16px;
  @media (max-width: 800px) {
    max-width: 320px;
  }
`;

export const ProjectInfoButton = styled.button`
  color: white;
  background: #651e3e;
  border: none;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  &:hover {
    background: #db6400;
  }
`;

export const ProjectInfoButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

export const ProjectImage = styled.img`
  position: absolute;
  top: 120px;
  right: 10px;
  height: 300px;
  width: 350px;
  cursor: pointer;
  z-index: 99;
  transform: ${({ size }) =>
    size ? "scale(1.5) translateX(-66%) " : "scale(1)"};
  transition: 0.5s ease-in;
  @media (max-width: 800px) {
    display: none;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 470px;
  z-index: 99;
  right: 275px;
  text-shadow: 2px 2px 2px black;
  opacity: ${({ size }) => (size ? "1" : "0")};
  transition: opacity 1.5s;
  @media (max-width: 800px) {
    display: none;
  }
`;

const ProjectEnlarge = styled.div`
  position: absolute;
  right: 15px;
  bottom: 60px;
  font-size: 12px;
  font-style: italic;
  @media (max-width: 800px) {
    display: none;
  }
`;

function Project({ projects, projectNumber }) {
  const [size, setSize] = useState(false);

  let siteText = "";
  let buttonClass = "";

  if (projects[projectNumber].site) {
    siteText = "View site";
  } else if (projects[projectNumber].site === null) {
    siteText = "";
    buttonClass = "hidden";
  }

  let gradeText = "";
  let buttonClassTwo = "";

  if (projects[projectNumber].grades) {
    gradeText = "View grades";
  } else if (projects[projectNumber].grades === null) {
    gradeText = "";
    buttonClassTwo = "hidden";
  }

  function toSite() {
    window.open(projects[projectNumber].site);
  }

  function toGithub() {
    window.open(projects[projectNumber].github);
  }

  function toGrades() {
    window.open(projects[projectNumber].grades);
  }

  return (
    <ProjectInfoContainer>
      <ProjectInfoHeadline>
        {projects[projectNumber].headline}
      </ProjectInfoHeadline>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <img
          style={{
            height: "40px",
          }}
          src={projects[projectNumber].tech_stack}
        ></img>
      </div>
      <ProjectInfoParagraph>
        {projects[projectNumber].sub_headline}
      </ProjectInfoParagraph>
      <ProjectInfoParagraph>
        {projects[projectNumber].paragraph}
      </ProjectInfoParagraph>
      <ProjectInfoButtonContainer>
        <ProjectInfoButton
          className={buttonClass}
          onClick={toSite}
          arial-label="To website"
        >
          {siteText}
        </ProjectInfoButton>
        <ProjectInfoButton
          className={buttonClassTwo}
          onClick={toGrades}
          arial-label="To grades"
        >
          {gradeText}
        </ProjectInfoButton>

        <FaGithub className="github-icon" onClick={toGithub}>
          To github
        </FaGithub>
      </ProjectInfoButtonContainer>

      <ProjectImage
        src={projects[projectNumber].image}
        size={size}
        onClick={() => setSize(!size)}
        alt="project image"
      ></ProjectImage>

      <CloseIcon size={size}>Click to close</CloseIcon>
      <ProjectEnlarge>Click to enlarge</ProjectEnlarge>
    </ProjectInfoContainer>
  );
}

export default Project;
