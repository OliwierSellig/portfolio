import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <CustomGrid rowGap={3.2} marginBottom={3.2}>
      <SectionHeading justify="start">Projects I've worked on:</SectionHeading>
      <ProjectList />
    </CustomGrid>
  );
}

export default Projects;
