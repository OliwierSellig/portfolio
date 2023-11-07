import CustomGrid from "../components/global/CustomGrid";
import ProjectBox from "../components/projectView/ProjectBox";
import ProjectGallery from "../components/projectView/ProjectGallery";
import ProjectHeading from "../components/projectView/ProjectHeading";

function ProjectView() {
  return (
    <CustomGrid columns={2}>
      <ProjectHeading />
      <ProjectGallery />
      <ProjectBox />
      <ProjectBox />
    </CustomGrid>
  );
}

export default ProjectView;
