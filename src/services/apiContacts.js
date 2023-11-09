import supabase from "./supabase";

export async function getContacts() {
  const { data, error } = await supabase.from("contact").select("*");

  if (error) {
    console.error(error);
    throw new Error("Contacts could not be loaded");
  }

  return data;
}
