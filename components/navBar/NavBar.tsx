'use client'

import Image from 'next/image'
import Link from 'next/link'
import Banner from '/public/assets/Banuddy.png'
import { useSession, signIn, signOut } from 'next-auth/react'
import './style.css'

const NavBarDefault = () => {
  const { data: session } = useSession() //세션 정보를 가져옴

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
        <Link href="/">
          {session ? ( //세션 정보가 있으면 signOut()호출
            <button className="nav-item" onClick={() => signOut()}>
              로그아웃
            </button>
          ) : (
            //세션 정보가 없으면 signIn()호출
            <button className="nav-item" onClick={() => signIn()}>
              로그인
            </button>
          )}
        </Link>
      </div>
      {session ? ( //세션 정보가 있으면 signOut()호출
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        //세션 정보가 없으면 signIn()호출
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  )
}
export default NavBarDefault
