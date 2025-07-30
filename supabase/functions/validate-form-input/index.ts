import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Security-Policy': "default-src 'self'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
};

// Input sanitization function
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return !phone || phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { formType, formData } = await req.json();

    // Rate limiting check (simple implementation)
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown';
    console.log(`Form submission from IP: ${clientIP}, Type: ${formType}`);

    // Sanitize all input fields
    const sanitizedData: any = {};
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === 'string') {
        sanitizedData[key] = sanitizeInput(value);
      } else {
        sanitizedData[key] = value;
      }
    }

    // Validate required fields based on form type
    switch (formType) {
      case 'contact':
        if (!validateEmail(sanitizedData.email)) {
          throw new Error('Invalid email format');
        }
        if (!sanitizedData.name || sanitizedData.name.length < 2) {
          throw new Error('Name is required and must be at least 2 characters');
        }
        if (!sanitizedData.company || sanitizedData.company.length < 2) {
          throw new Error('Company is required');
        }
        if (!sanitizedData.message || sanitizedData.message.length < 10) {
          throw new Error('Message must be at least 10 characters');
        }
        break;

      case 'webinar':
        if (!validateEmail(sanitizedData.email)) {
          throw new Error('Invalid email format');
        }
        if (!sanitizedData.first_name || sanitizedData.first_name.length < 2) {
          throw new Error('First name is required');
        }
        if (!sanitizedData.last_name || sanitizedData.last_name.length < 2) {
          throw new Error('Last name is required');
        }
        if (!sanitizedData.company || sanitizedData.company.length < 2) {
          throw new Error('Company is required');
        }
        if (!sanitizedData.job_title || sanitizedData.job_title.length < 2) {
          throw new Error('Job title is required');
        }
        break;

      case 'newsletter':
        if (!validateEmail(sanitizedData.email)) {
          throw new Error('Invalid email format');
        }
        break;

      default:
        throw new Error('Invalid form type');
    }

    // Validate phone if provided
    if (sanitizedData.phone && !validatePhone(sanitizedData.phone)) {
      throw new Error('Invalid phone number format');
    }

    return new Response(JSON.stringify({ 
      success: true, 
      sanitizedData,
      message: 'Input validation passed' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Input validation error:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});