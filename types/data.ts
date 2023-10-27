import { Database } from './supabase'

//프로필정보 테이블에있는 정보 한줄
export type Profile = Database['public']['Tables']['profiles']['Row']
