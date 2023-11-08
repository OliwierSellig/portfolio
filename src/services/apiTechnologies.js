import supabase from "./supabase";

export async function getTechnologies(techList) {
  let query = supabase.from("technologies").select("*");

  if (techList?.length) {
    query = query.in("slug", techList);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Technologies could not be loaded");
  }

  return data;
}
