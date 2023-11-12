import { useData } from "../../contexts/DataContext";
import CustomGrid from "../global/CustomGrid";
import ProjectItem from "./ProjectItem";
import ComingSoon from "./ComingSoon";

function ProjectList() {
  const { sortProjects } = useData();

  return (
    <CustomGrid as="ul" columns={2}>
      <>
        {sortProjects()?.map((p, i) => (
          <ProjectItem key={i} project={p} number={i} />
        ))}
        <ComingSoon />
      </>
    </CustomGrid>
  );
}

export default ProjectList;
