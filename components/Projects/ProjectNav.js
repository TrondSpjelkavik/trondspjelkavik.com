import styled from "styled-components";

const ProjectsNavigation = styled.nav`
  position: absolute;
  right: 0;
  top: 30px;
  width: 355px;
  height: 50px;
  background: #651e3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 30px;
  z-index: 4;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-around;
    padding: 0;
  }
`;
const ProjectsNavigationList = styled.li`
  align-items: center;
  display: flex;
  list-style: none;
  color: white;
  cursor: pointer;
`;

const LinkButton = styled.div`
  color: white;

  &:hover {
    text-decoration-line: overline;
    text-decoration-color: #db6400;
    text-decoration-thickness: 2px;
  }
`;

function ProjectsNav({ projects, projectNumber, setProjectNumber }) {
  return (
    <ProjectsNavigation>
      <ProjectsNavigationList className={projectNumber == 0 ? "active" : ""}>
        {" "}
        <LinkButton onClick={() => setProjectNumber((projectNumber = 0))}>
          {projects[0].keyword}
        </LinkButton>
      </ProjectsNavigationList>
      <ProjectsNavigationList className={projectNumber == 1 ? "active" : ""}>
        <LinkButton onClick={() => setProjectNumber((projectNumber = 1))}>
          {projects[1].keyword}
        </LinkButton>
      </ProjectsNavigationList>
      <ProjectsNavigationList className={projectNumber == 2 ? "active" : ""}>
        <LinkButton onClick={() => setProjectNumber((projectNumber = 2))}>
          {projects[2].keyword}
        </LinkButton>
      </ProjectsNavigationList>
    </ProjectsNavigation>
  );
}

export default ProjectsNav;
