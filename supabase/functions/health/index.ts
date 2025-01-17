import { corsHeaders, handleCors, handleError } from '../_shared/cors'

Deno.serve(async (req) => {
  try {
    // Handle CORS
    const corsResponse = handleCors(req)
    if (corsResponse) return corsResponse

    // Basic health check response
    const data = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        } 
      }
    )
  } catch (error) {
    return handleError(error)
  }
})