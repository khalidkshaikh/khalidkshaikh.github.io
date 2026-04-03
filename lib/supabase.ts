import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://taguitvjtruqajdsvffa.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_dEpXdVrPitFf1dTNUZRB4A__u1mhW2U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
