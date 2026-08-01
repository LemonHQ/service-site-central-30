-- Fix critical RLS policies that expose user data to the public role
-- These tables are write-only for public users (forms/subscriptions) and should only be readable by service_role

-- 1. h2contact_submissions: restrict read access to service_role
DROP POLICY IF EXISTS "Service role can read h2contact submissions" ON public.h2contact_submissions;
CREATE POLICY "Service role can read h2contact submissions"
ON public.h2contact_submissions
FOR SELECT
TO service_role
USING (true);

-- Ensure public can still submit the contact form
DROP POLICY IF EXISTS "Allow public contact submissions" ON public.h2contact_submissions;
CREATE POLICY "Allow public contact submissions"
ON public.h2contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- 2. lead_qualifications: restrict read access to service_role
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

-- 3. newsletter_subscriptions: restrict management access to service_role only
DROP POLICY IF EXISTS "Enable all actions for service role" ON public.newsletter_subscriptions;
CREATE POLICY "Service role can manage newsletter subscriptions"
ON public.newsletter_subscriptions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Ensure public can still subscribe to the newsletter
DROP POLICY IF EXISTS "Allow public newsletter subscriptions" ON public.newsletter_subscriptions;
CREATE POLICY "Allow public newsletter subscriptions"
ON public.newsletter_subscriptions
FOR INSERT
TO public
WITH CHECK (true);
