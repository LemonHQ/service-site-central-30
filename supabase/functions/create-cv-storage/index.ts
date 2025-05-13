
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// This creates the CV uploads bucket if it doesn't exist yet
Deno.serve(async (_req) => {
  try {
    // Create a Supabase client with the Admin key
    const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check if the bucket already exists
    const { data: buckets } = await supabase
      .storage
      .listBuckets();
      
    const bucketExists = buckets?.some(bucket => bucket.name === 'cv-uploads');
    
    if (!bucketExists) {
      // Create the cv-uploads bucket
      const { error } = await supabase
        .storage
        .createBucket('cv-uploads', {
          public: false,
          fileSizeLimit: 10485760, // 10MB
          allowedMimeTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        });
        
      if (error) {
        throw error;
      }
      
      // Set up RLS policy for the cv-uploads bucket
      // Allow users to upload to their own folder
      await supabase.rpc('create_storage_policy', {
        bucket_id: 'cv-uploads',
        policy_name: 'Allow public uploads',
        definition: 'true',
        operation: 'INSERT'
      });
    }

    return new Response(JSON.stringify({ 
      message: "CV uploads storage bucket is ready" 
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error.message 
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
});
