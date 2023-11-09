import supabase from "./supabase";

export async function getTechnologies() {
  const { data, error } = await supabase.from("technologies").select("*");

  if (error) {
    console.error(error);
    throw new Error("Technologies could not be loaded");
  }

  return data;
}
