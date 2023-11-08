import ProjectItem from "./ProjectItem";
import CustomGrid from "../global/CustomGrid";
import ComingSoon from "./ComingSoon";

import { useProjects } from "../../hooks/useProjects";
import ProjectLoader from "./ProjectLoader";

function ProjectList() {
  const { isLoading, projects } = useProjects(
    [],
    ["name", "slug", "techstack", "images", "live_url"]
  );

  return (
    <CustomGrid as="ul" columns={2}>
      {!isLoading && projects.length > 1 ? (
        <>
          {projects?.map((p, i) => (
            <ProjectItem key={i} project={p} isLoading={isLoading} />
          ))}
          <ComingSoon />
        </>
      ) : (
        Array.from({ length: 5 }, (_, i) => <ProjectLoader key={i} />)
      )}
    </CustomGrid>
  );
}

export default ProjectList;
