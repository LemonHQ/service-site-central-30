-- Fix lead_qualifications: remove the public SELECT policy named 'select_policy'
DROP POLICY IF EXISTS "select_policy" ON public.lead_qualifications;

-- Ensure a service_role-only read policy exists for lead_qualifications
DROP POLICY IF EXISTS "Service role can read lead qualifications" ON public.lead_qualifications;
CREATE POLICY "Service role can read lead qualifications"
ON public.lead_qualifications
FOR SELECT
TO service_role
USING (true);

-- Ensure public can still submit lead qualifications
DROP POLICY IF EXISTS "Allow public lead qualifications" ON public.lead_qualifications;
CREATE POLICY "Allow public lead qualifications"
ON public.lead_qualifications
FOR INSERT
TO public
WITH CHECK (true);

-- Create a security definer function to verify a storage path is registered in cv_submissions
CREATE OR REPLACE FUNCTION public.is_valid_cv_path(file_path text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.cv_submissions
    WHERE cv_submissions.file_path = file_path
  );
$$;

-- Revoke execute on the helper function from public to avoid misuse
REVOKE EXECUTE ON FUNCTION public.is_valid_cv_path(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.is_valid_cv_path(text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.is_valid_cv_path(text) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.is_valid_cv_path(text) TO service_role;

-- Fix cv-uploads storage policies: remove overly permissive public policies
DROP POLICY IF EXISTS "Users can upload CVs to their own folder" ON storage.objects;
DROP POLICY IF EXISTS "Users can view uploaded CVs" ON storage.objects;
DROP POLICY IF EXISTS "Service role full access to cv-uploads" ON storage.objects;

-- Allow public INSERT only when the file path is already registered in cv_submissions
CREATE POLICY "Users can upload CVs to registered paths"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'cv-uploads'
  AND public.is_valid_cv_path(name)
);

-- CV files contain PII: only service role can read them
CREATE POLICY "Service role can read CV files"
ON storage.objects
FOR SELECT
TO service_role
USING (
  bucket_id = 'cv-uploads'
);

-- Service role can manage CV uploads
CREATE POLICY "Service role full access to cv-uploads"
ON storage.objects
FOR ALL
TO service_role
USING (bucket_id = 'cv-uploads')
WITH CHECK (bucket_id = 'cv-uploads');
