import Projects from "../components/Projects/Projects";
import Meta from "../components/Global/Layout/Meta";

function projects() {
  return (
    <>
      <Meta
        title="Projects"
        description="A collection of projects made by Trond Fuglseth Spjelkavik. Includes SpaceX microsite, E-commerce website and Go lang projects"
      ></Meta>
      <Projects></Projects>
    </>
  );
}

export default projects;
