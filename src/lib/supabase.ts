
import { createClient } from '@supabase/supabase-js';

// Use the provided values directly since we're in development
const supabaseUrl = "https://kojbibcmsaadohlfutpq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvamJpYmNtc2FhZG9obGZ1dHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyODIwNjAsImV4cCI6MjA2MTg1ODA2MH0.Ql-crm2ZxvVswcp2ihdvffI3G7I0G_OcoqL3mRYSSJg";

// For production, you would use environment variables:
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Add a simple test to verify connection
supabase.from('contact_submissions').select('count', { count: 'exact', head: true })
  .then(response => {
    if (response.error) {
      console.error('Supabase connection error:', response.error);
    } else {
      console.log('Successfully connected to Supabase');
    }
  })
  .catch(err => {
    console.error('Failed to connect to Supabase:', err);
  });
