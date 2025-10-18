export default function CheckPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">Vérification Supabase</h1>
        <div className="space-y-4">
          <div>
            <p className="font-bold">NEXT_PUBLIC_SUPABASE_URL:</p>
            <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">
              {process.env.NEXT_PUBLIC_SUPABASE_URL || '❌ NON DÉFINI'}
            </p>
          </div>
          <div>
            <p className="font-bold">NEXT_PUBLIC_SUPABASE_ANON_KEY:</p>
            <p className="font-mono text-sm bg-gray-100 p-2 rounded break-all">
              {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY 
                ? `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 50)}... (${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length} caractères)`
                : '❌ NON DÉFINI'}
            </p>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded">
            <p className="font-bold mb-2">✅ Ce qui doit être vrai:</p>
            <ul className="text-sm space-y-1">
              <li>• URL commence par https://</li>
              <li>• URL finit par .supabase.co</li>
              <li>• Clé commence par eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</li>
              <li>• Clé fait ~400 caractères</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}