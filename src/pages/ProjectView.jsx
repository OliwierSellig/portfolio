import CustomGrid from "../components/global/CustomGrid";
import ProjectBox from "../components/projectView/ProjectBox";
import ProjectGallery from "../components/projectView/ProjectGallery";
import ProjectHeading from "../components/projectView/ProjectHeading";
import { ScreenshotsProvider } from "../contexts/ScreenshotsContext";

function ProjectView() {
  return (
    <ScreenshotsProvider>
      <CustomGrid columns={2}>
        <ProjectHeading />
        <ProjectGallery />
        <ProjectBox />
        <ProjectBox />
      </CustomGrid>
    </ScreenshotsProvider>
  );
}

export default ProjectView;
