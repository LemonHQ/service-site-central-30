
-- Add icp_type column to lead_qualifications table to store which ICP category the user belongs to
ALTER TABLE public.lead_qualifications 
ADD COLUMN icp_type TEXT;

-- Add a check constraint to ensure valid ICP types
ALTER TABLE public.lead_qualifications 
ADD CONSTRAINT valid_icp_type 
CHECK (icp_type IN ('digital-transformation-leaders', 'strategic-management-consultancies', 'digital-roadmap-owners', 'independent-consultants'));
