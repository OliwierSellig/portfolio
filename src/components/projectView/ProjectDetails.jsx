import { useParams } from "react-router";
import CustomGrid from "../global/CustomGrid";
import ProjectGallery from "./ProjectGallery";
import ProjectHeading from "./ProjectHeading";
import ProjectTextBox from "./ProjectTextBox";
import { useProjects } from "./../../hooks/useProjects";
import styled from "styled-components";
import { flexCenter } from "../../styles/Mixins";
import Loader from "../global/Loader";
import SectionHeading from "../global/SectionHeading";
import ExplanationVideo from "./ExplanationVideo";
import ProjectContactList from "./ProjectContactList";
import { useData } from "../../contexts/DataContext";

const StyledLoader = styled.div`
  position: absolute;
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  padding: 2.4rem;

  & span {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: var(--letter-spacing-default);
    text-align: center;
  }
`;

function ProjectDetails() {
  const { slug } = useParams();
  const { filterProjects } = useData();
  const selectedProject = filterProjects([slug]);

  return (
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
  );
}

export default ProjectDetails;
