'use client'

import Image from 'next/image'
import Link from 'next/link'
import Banner from '/public/assets/Banuddy.png'
import './style.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const NavBarDefault = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()
  const supabase = createClientComponentClient()

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()

        if (error) {
          throw new Error(error.message)
        }

        if (data?.user) {
          setLoggedIn(true)
        } else {
          setLoggedIn(false)
        }
      } catch (error) {
        console.error('user session 못찾음', error)
        setLoggedIn(false)
      }
    }

    checkUserSession()
  }, [])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Error logging out:', error.message)
    else router.push('/login')
  }

  return (
    <div className=" w-full	border flex justify-between items-center py-4 px-10 bg-gray-800 text-black">
      <div className="w-3/4 flex items-center">
        <div>
          <Link href="/login">
            <Image src={Banner} alt="Logo" className="w-[150px] h-10" />
          </Link>
        </div>
      </div>
      <div className="w-3/4 flex justify-end space-x-2">
        <Link href="/adopt/seoul">
          <div className="nav-item">입양</div>
        </Link>
        <Link href="/shelter">
          <div className="nav-item">봉사</div>
        </Link>
        <Link href="/my_page/modify_info">
          <div className="nav-item">마이페이지</div>
        </Link>

        {loggedIn ? (
          <Link href="/">
            <button className="nav-item" onClick={handleLogout}>
              로그아웃
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button className="nav-item">로그인</button>
          </Link>
        )}
      </div>
    </div>
  )
}
export default NavBarDefault
