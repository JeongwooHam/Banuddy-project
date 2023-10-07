import Image from 'next/image'
import Link from 'next/link'
import Banner from '/public/assets/Banuddy.png'

const NavBar = () => {
  return (
    <div className=" w-full	flex justify-between items-center py-4 bg-gray-800 text-black">
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
    </div>
  )
}
export default NavBar
