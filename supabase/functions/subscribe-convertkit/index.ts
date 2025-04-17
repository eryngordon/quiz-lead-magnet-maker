
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SubscriberData {
  email: string;
  fields?: Record<string, string>;
  gdpr_consent?: boolean;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { email, fields, gdpr_consent }: SubscriberData = await req.json()

    const formId = Deno.env.get('CONVERTKIT_FORM_ID')
    const apiKey = Deno.env.get('CONVERTKIT_API_KEY')

    if (!formId || !apiKey) {
      throw new Error('Missing ConvertKit configuration')
    }

    console.log('Subscribing email to ConvertKit:', email)

    const response = await fetch(`${CONVERTKIT_API_URL}/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        email,
        fields: {
          ...fields,
          gdpr_consent: gdpr_consent ? 'yes' : 'no'
        },
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('ConvertKit API error:', error)
      throw new Error('Failed to subscribe to ConvertKit')
    }

    const data = await response.json()
    console.log('Successfully subscribed to ConvertKit:', data)

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error in subscribe-convertkit function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
