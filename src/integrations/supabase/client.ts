// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rqwwqamktcibmhltxgvm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxd3dxYW1rdGNpYm1obHR4Z3ZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMjY4ODgsImV4cCI6MjA1MTkwMjg4OH0.UL7O7DgOUa_mYhBpyYa9VgGUgWPbtR2z_mROcWXIIm8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);