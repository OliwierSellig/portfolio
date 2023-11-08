import { ScreenshotsProvider } from "../contexts/ScreenshotsContext";
import ProjectDetails from "../components/projectView/ProjectDetails";

function ProjectView() {
  return (
    <ScreenshotsProvider>
      <ProjectDetails />
    </ScreenshotsProvider>
  );
}

export default ProjectView;
