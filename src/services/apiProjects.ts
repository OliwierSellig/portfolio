import { PostgrestError } from "@supabase/supabase-js";
import { ProjectItem } from "../lib/types";
import supabase from "./supabase";

export async function getProjects() {
  const {
    data,
    error,
  }: { data: ProjectItem[] | null; error: PostgrestError | null } =
    await supabase.from("projects").select("*");

  if (error) {
    console.error(error);
    throw new Error("Projects could not be loaded");
  }

  return data;
}
