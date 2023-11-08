import supabase from "./supabase";

export async function getProjects(projectList, projectValuesList) {
  let query = supabase
    .from("projects")
    .select(projectValuesList?.length ? projectValuesList.join(",") : "*");

  if (projectList?.length) {
    query = query.in("slug", projectList);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Projects could not be loaded");
  }

  return data;
}
