import { useData } from "../../contexts/DataContext";
import CustomGrid from "../global/CustomGrid";
import ComingSoon from "./ComingSoon";
import ProjectItemBox from "./ProjectItemBox";

function ProjectList() {
  const { sortProjects } = useData();

  return (
    <CustomGrid as="ul" columns={2}>
      <>
        {sortProjects()?.map((p, i) => (
          <ProjectItemBox key={i} project={p} number={i} />
        ))}
        <ComingSoon />
      </>
    </CustomGrid>
  );
}

export default ProjectList;
