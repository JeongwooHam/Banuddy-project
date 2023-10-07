import Image from 'next/image'
import Link from 'next/link'
import Banner from '/public/assets/Banuddy.png'
import { useSession, signIn, signOut } from 'next-auth/react'

const NavBar = () => {
  const { data: session } = useSession() //세션 정보를 가져옴

  return (
    <div className=" w-full	border flex justify-between items-center py-4 bg-gray-800 text-black">
      <div className="w-3/4 flex items-center">
        <div>
          <Link href="/login">
            <Image src={Banner} alt="Logo" className="w-[150px] h-10" />
          </Link>
        </div>
      </div>
      <div className="w-1/4 flex justify-end space-x-4">
        <Link href="/adopt/national">
          <div>입양</div>
        </Link>
        <Link href="/shelter">
          <div>봉사</div>
        </Link>
        <Link href="/my_page">
          <div>마이페이지</div>
        </Link>
        <Link href="/">
          <div>로그아웃</div>
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
export default NavBar
