import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Check your .env file and restart the Vite dev server (env vars are only read at server startup)."
  );
}

if (import.meta.env.DEV) {
  console.info(
    "[supabase] url:",
    supabaseUrl,
    "| anon key prefix:",
    supabaseAnonKey.slice(0, 12) + "..."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
