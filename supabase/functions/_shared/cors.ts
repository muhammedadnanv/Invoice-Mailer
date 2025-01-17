export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

export const handleCors = (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
}

export const handleError = (error: any) => {
  console.error('Error:', error)
  
  return new Response(
    JSON.stringify({
      error: error.message || 'An unexpected error occurred',
      status: error.status || 500
    }),
    {
      status: error.status || 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    }
  )
}