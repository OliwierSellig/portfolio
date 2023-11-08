import ProjectItem from "./ProjectItem";
import CustomGrid from "../global/CustomGrid";
import ComingSoon from "./ComingSoon";
import { projectsList } from "../../services/utils";

function ProjectList() {
  return (
    <CustomGrid as="ul" columns={2}>
      {projectsList.map((p, i) => (
        <ProjectItem key={i} project={p} />
      ))}
      <ComingSoon />
    </CustomGrid>
  );
}

export default ProjectList;
