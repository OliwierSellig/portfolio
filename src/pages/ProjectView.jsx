import CustomGrid from "../components/global/CustomGrid";
import ProjectTextBox from "../components/projectView/ProjectTextBox";
import ProjectGallery from "../components/projectView/ProjectGallery";
import ProjectHeading from "../components/projectView/ProjectHeading";
import { ScreenshotsProvider } from "../contexts/ScreenshotsContext";

function ProjectView() {
  return (
    <ScreenshotsProvider>
      <CustomGrid columns={2}>
        <ProjectHeading />
        <ProjectGallery />
        <ProjectTextBox heading="About the project" type="about" />
        <ProjectTextBox heading="What I've learned" type="learned" />
      </CustomGrid>
    </ScreenshotsProvider>
  );
}

export default ProjectView;
