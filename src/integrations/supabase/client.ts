
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Create a single supabase client for the entire app
export const supabase = createClient<Database>(
  'https://zfkspavuxvdtofgdrrkv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpma3NwYXZ1eHZkdG9mZ2Rycmt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODYzMjgsImV4cCI6MjA2MjQ2MjMyOH0.xCbNJiUqzI8HdGRc5WuZbO1rJ6TjjeKIKGjMvFgDtcI'
);
