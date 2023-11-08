import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jhlemuenelichgebawrp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpobGVtdWVuZWxpY2hnZWJhd3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0Mjc2MjgsImV4cCI6MjAxNTAwMzYyOH0.m5Jdbv8bEFt-WazwuLYCQv3kNmOnmI4KnG0WxO7YzeU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
