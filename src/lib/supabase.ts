
// This file is being replaced by the Supabase client in integrations/supabase/client.ts
// It's kept for backward compatibility with existing imports
import { supabase as integrationsSupabase } from '@/integrations/supabase/client';

export const supabase = integrationsSupabase;

console.log('Using Supabase client from integrations folder');
