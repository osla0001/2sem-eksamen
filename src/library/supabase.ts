import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yhioxktrqmlazkwnvbit.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloaW94a3RycW1sYXprd252Yml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNjM1MjksImV4cCI6MjA2MjczOTUyOX0.rPSCRtiiBeBLLMGOZz9pd4-ZgiCMnuScZxME3EDLybc";

export const supabase = createClient(supabaseUrl, supabaseKey);
