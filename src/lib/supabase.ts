
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if we're in development mode and environment variables are missing
const isDevelopment = import.meta.env.DEV;
const hasSupabaseConfig = supabaseUrl && supabaseKey;

if (!hasSupabaseConfig) {
  console.warn('Supabase environment variables missing. Using mock data for development.');
}

// Create the client only if we have the required configuration
export const supabase = hasSupabaseConfig 
  ? createClient(supabaseUrl, supabaseKey)
  : null;
