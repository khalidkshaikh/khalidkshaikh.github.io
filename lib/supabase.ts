import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://taguitvjtruqajdsvffa.supabase.co";
const supabaseAnonKey = "sb_publishable_dEpXdVrPitFf1dTNUZRB4A__u1mhW2U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
