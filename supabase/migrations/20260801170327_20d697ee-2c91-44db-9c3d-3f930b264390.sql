-- Add a unique upload token column to cv_submissions so each upload is tied to a specific record
ALTER TABLE public.cv_submissions ADD COLUMN IF NOT EXISTS upload_token uuid UNIQUE;

-- Replace the helper function with a token-based verifier.
-- The path format is: <email-folder>/<upload-token>/<file-name>
CREATE OR REPLACE FUNCTION public.is_valid_cv_upload(path text, token uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.cv_submissions
    WHERE cv_submissions.upload_token = token
      AND cv_submissions.file_path = path
  );
$$;

-- Revoke execute on the helper function from public to avoid misuse
REVOKE EXECUTE ON FUNCTION public.is_valid_cv_upload(text, uuid) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.is_valid_cv_upload(text, uuid) FROM anon;
REVOKE EXECUTE ON FUNCTION public.is_valid_cv_upload(text, uuid) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.is_valid_cv_upload(text, uuid) TO service_role;

-- Drop the old storage policies and create the token-verified policy
DROP POLICY IF EXISTS "Users can upload CVs to registered paths" ON storage.objects;
DROP POLICY IF EXISTS "Service role can read CV files" ON storage.objects;
DROP POLICY IF EXISTS "Service role full access to cv-uploads" ON storage.objects;

-- Public uploads must match a registered cv_submissions record with the same upload token and path
CREATE POLICY "Users can upload CVs to registered paths"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'cv-uploads'
  AND (storage.foldername(name))[2] IS NOT NULL
  AND public.is_valid_cv_upload(name, (storage.foldername(name))[2]::uuid)
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
