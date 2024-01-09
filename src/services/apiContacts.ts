import { PostgrestError } from "@supabase/supabase-js";
import { ContactItem } from "../lib/types";
import supabase from "./supabase";

export async function getContacts() {
  const {
    data,
    error,
  }: { data: ContactItem[] | null; error: PostgrestError | null } =
    await supabase.from("contact").select("*");

  if (error) {
    console.error(error);
    throw new Error("Contacts could not be loaded");
  }

  return data;
}
