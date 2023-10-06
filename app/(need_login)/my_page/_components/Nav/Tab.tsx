'use client'

import { useRouter } from 'next/navigation'

const NavTabs: React.FC = () => {
  const navArray = [
    { key: '개인정보수정', value: '/' },
    { key: '관심동물공고', value: '/liked_animals' },
    { key: '봉사신청내역', value: '/volunteer_list' },
  ]

  const router = useRouter()

  return (
    <>
      {navArray.map(({ key, value }) => (
        <li
          onClick={() => router.push(`/my_page${value}`)}
          className="cursor-pointer hover:bg-subColor-100 py-[10px] font-bold"
        >
          {key}
        </li>
      ))}
    </>
  )
}

export default NavTabs
