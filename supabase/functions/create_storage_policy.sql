
-- Function to create a storage bucket policy
CREATE OR REPLACE FUNCTION create_storage_policy(
  bucket_id TEXT,
  policy_name TEXT,
  definition TEXT,
  operation TEXT
) RETURNS void as $$
DECLARE
  policy_id TEXT := bucket_id || '_' || policy_name;
BEGIN
  INSERT INTO storage.policies (name, definition, bucket_id, operation)
  VALUES (policy_id, definition, bucket_id, operation)
  ON CONFLICT (name, bucket_id, operation) DO
  UPDATE SET definition = EXCLUDED.definition;
END;
$$ LANGUAGE plpgsql;
