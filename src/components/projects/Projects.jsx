import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import ProjectList from "./ProjectList";
import { useNavigation } from "../../contexts/NavigationCotext";

function Projects() {
  const { projectsRef } = useNavigation();

  return (
    <CustomGrid
      navigationRef={projectsRef}
      id="projects"
      rowGap={3.2}
      marginBottom={3.2}
    >
      <SectionHeading
        justify="start"
        animationType="fadeHorizontal"
        animationFadeCoords={[-5, 0]}
        animationTime={1.5}
      >
        Projects I've worked on:
      </SectionHeading>
      <ProjectList />
    </CustomGrid>
  );
}

export default Projects;
