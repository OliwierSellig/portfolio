import { useParams } from "react-router";
import { useData } from "../../contexts/DataContext";
import CustomGrid from "../global/CustomGrid";
import SectionHeading from "../global/SectionHeading";
import ProjectGallery from "./ProjectGallery";
import ProjectHeading from "./ProjectHeading";
import ProjectTextBox from "./ProjectTextBox";
import ExplanationVideo from "./ExplanationVideo";
import ProjectContactList from "./ProjectContactList";
import ProjectNotFound from "./ProjectNotFound";

function ProjectDetails() {
  const { slug } = useParams();
  const { filterProjects } = useData();
  const selectedProject = filterProjects([slug]);

  return selectedProject?.id ? (
    <>
      <CustomGrid columns={2} marginBottom={3.2}>
        <ProjectHeading
          heading={selectedProject.name}
          techstack={selectedProject.techstack}
          liveUrl={selectedProject.live_url}
          repoUrl={selectedProject.github_url}
        />
        <ProjectGallery screenshots={selectedProject.images} />
        <ProjectTextBox heading="About the project" type="about">
          {selectedProject.about}
        </ProjectTextBox>
        <ProjectTextBox heading="What I've learned" type="learned">
          {selectedProject.learned}
        </ProjectTextBox>
      </CustomGrid>
      <CustomGrid columns={3} marginBottom={4.2} columnGap={1.6}>
        <SectionHeading
          justify="start"
          animationType="fadeHorizontal"
          animationTime={1}
          animationFadeCoords={[-5, 0]}
        >
          Take a look at the explanation video!
        </SectionHeading>
        <ExplanationVideo video={selectedProject.video_url} />
        <ProjectContactList />
      </CustomGrid>
    </>
  ) : (
    <ProjectNotFound projectName={slug} />
  );
}

export default ProjectDetails;
