import { PostgrestError } from "@supabase/supabase-js";
import { TechnologyItem } from "../lib/types";
import supabase from "./supabase";

export async function getTechnologies() {
  const {
    data,
    error,
  }: { data: TechnologyItem[] | null; error: PostgrestError | null } =
    await supabase.from("technologies").select("*");

  if (error) {
    console.error(error);
    throw new Error("Technologies could not be loaded");
  }

  return data;
}
