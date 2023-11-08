import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/apiProjects";

export function useProjects(projectsList, projectsValuesList) {
  const list = projectsList || [];
  const valuesList = projectsValuesList || [];

  const {
    isLoading,
    data: projects,
    error,
  } = useQuery({
    queryKey: ["projects", projectsList, projectsValuesList],
    queryFn: () => getProjects(list, valuesList),
  });

  return { isLoading, projects, error };
}
