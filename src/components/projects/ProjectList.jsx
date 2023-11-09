import ProjectItem from "./ProjectItem";
import CustomGrid from "../global/CustomGrid";
import ComingSoon from "./ComingSoon";
import { useData } from "../../contexts/DataContext";

function ProjectList() {
  const { projects } = useData();

  return (
    <CustomGrid as="ul" columns={2}>
      <>
        {projects?.map((p, i) => (
          <ProjectItem key={i} project={p} number={i} />
        ))}
        <ComingSoon />
      </>
    </CustomGrid>
  );
}

export default ProjectList;
