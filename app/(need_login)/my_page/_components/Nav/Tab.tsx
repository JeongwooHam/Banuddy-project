'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const NavTabs: React.FC = () => {
  const navArray = [
    { id: 0, key: '개인정보수정', value: '/modify_info' },
    { id: 1, key: '관심동물공고', value: '/liked_animals' },
    { id: 2, key: '봉사신청내역', value: '/volunteer_list' },
  ]

  const [target, setTarget] = useState(0)

  const router = useRouter()

  return (
    <>
      {navArray.map(({ id, key, value }) => (
        <li
          onClick={() => {
            router.replace(`/my_page${value}`)
            setTarget(id)
          }}
          className="cursor-pointer  py-[10px] font-bold"
          style={{ backgroundColor: target === id ? '#C3F6AB' : 'white' }}
        >
          {key}
        </li>
      ))}
    </>
  )
}

export default NavTabs
