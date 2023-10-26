import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// Export for usage by the rest of the app
export { supabase }
