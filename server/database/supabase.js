"dependencies": {
  "@supabase/supabase-js": "^2.45.4",
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5"
}
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;

const supabaseKey =
  process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase environment variables are missing"
  );
}

const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

export default supabase;
