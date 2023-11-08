import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import ProjectList from "./ProjectList";
import { useNavigation } from "../../contexts/NavigationCotext";
import { useProjects } from "../hooks/useProjects";
import { useTechnologies } from "../hooks/useTechnologies";

function Projects() {
  const { projectsRef } = useNavigation();
  const { projects } = useProjects();
  const { technologies } = useTechnologies(["css", "html"]);
  console.log(technologies);

  return (
    <CustomGrid
      navigationRef={projectsRef}
      id="projects"
      rowGap={3.2}
      marginBottom={3.2}
    >
      <SectionHeading justify="start">Projects I've worked on:</SectionHeading>
      <ProjectList />
    </CustomGrid>
  );
}

export default Projects;
