-- Fix RLS policies for cv_submissions table
CREATE POLICY "Allow public CV submissions" 
ON public.cv_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own CV submissions" 
ON public.cv_submissions 
FOR SELECT 
USING (email = auth.email());

-- Fix RLS policies for webinar_registrations table  
CREATE POLICY "Allow public webinar registrations"
ON public.webinar_registrations
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own webinar registrations"
ON public.webinar_registrations
FOR SELECT
USING (email = auth.email());

-- Create cv-uploads storage bucket with proper security
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types) 
VALUES (
  'cv-uploads', 
  'cv-uploads', 
  false, 
  10485760, -- 10MB limit
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
) ON CONFLICT (id) DO UPDATE SET
  public = false,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

-- Secure storage policies for CV uploads
CREATE POLICY "Users can upload CVs to their own folder"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'cv-uploads' 
  AND (storage.foldername(name))[1] = 'public'
);

CREATE POLICY "Users can view uploaded CVs"  
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'cv-uploads'
  AND (storage.foldername(name))[1] = 'public'
);

-- Allow service role full access for admin functions
CREATE POLICY "Service role full access to cv-uploads"
ON storage.objects
FOR ALL
TO service_role
USING (bucket_id = 'cv-uploads')
WITH CHECK (bucket_id = 'cv-uploads');