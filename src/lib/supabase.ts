
import { createClient } from '@supabase/supabase-js';

// Use the provided Supabase URL and key for development
const supabaseUrl = 'https://kojbibcmsaadohlfutpq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvamJpYmNtc2FhZG9obGZ1dHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyODIwNjAsImV4cCI6MjA2MTg1ODA2MH0.Ql-crm2ZxvVswcp2ihdvffI3G7I0G_OcoqL3mRYSSJg';

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Check if the contact_submissions table exists, if not, log a message
// Using Promise.resolve to ensure we have access to .catch
Promise.resolve(
  supabase
    .from('contact_submissions')
    .select('*')
    .limit(1)
)
  .then(() => {
    console.log('Successfully connected to Supabase and found contact_submissions table');
  })
  .catch((error) => {
    console.warn('Error checking contact_submissions table:', error.message);
    console.info('Make sure to create a "contact_submissions" table in your Supabase database with the proper columns.');
  });
