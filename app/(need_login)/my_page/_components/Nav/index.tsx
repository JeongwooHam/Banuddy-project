'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import NavTabs from './Tab'
import UserInfo from './UserInfo'
import { Database } from '@/types/supabase'
import { useEffect, useState } from 'react'
import { Profile } from '@/types/data'

interface NavbarProps {
  nickname: string
  description: string
}

const NavBar: React.FC<NavbarProps> = ({ nickname, description }) => {
  //클라이언트 패턴
  // 서버는 useEffect 빼고 페이지자체를 async await 해주면된다
  const supabase = createClientComponentClient<Database>()
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    const init = async () => {
      const { data: user } = await supabase.auth.getUser()
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.user?.id ?? '')
        .maybeSingle()
      if (data) setProfile(data)
    }
    init()
  }, [])

  return (
    <nav className=" w-[233px] h-[80%] border-r-[1px] border-gray-100 text-center  ">
      <ul className="w-[200px] m-center">
        <UserInfo
          nickname={profile?.user_name ?? ''}
          description={profile?.user_phone_number ?? ''}
        />
        <NavTabs />
      </ul>
    </nav>
  )
}

export default NavBar
