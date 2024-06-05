import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qwbmmpmddkorfvkieprf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3Ym1tcG1kZGtvcmZ2a2llcHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTY3ODAsImV4cCI6MjAzMjg5Mjc4MH0.Y2wUyPHLHB7gTL1gtAB0mWxVxotuX8TZPIUfcgFcyk4";

export const supabase = createClient(supabaseUrl, supabaseKey);
