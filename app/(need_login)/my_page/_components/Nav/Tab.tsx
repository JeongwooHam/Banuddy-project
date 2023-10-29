'use client'

import Link from 'next/link'
import { useState } from 'react'

const NavTabs: React.FC = () => {
  const navArray = [
    { id: 0, key: '개인정보수정', value: '/modify_info' },
    { id: 1, key: '관심동물공고', value: '/liked_animals' },
    { id: 2, key: '봉사신청내역', value: '/volunteer_list' },
  ]

  const [target, setTarget] = useState(0)

  return (
    <>
      {navArray.map(({ id, key, value }) => (
        <li
          key={id}
          className="cursor-pointer  py-[10px] font-bold"
          style={{ backgroundColor: target === id ? '#C3F6AB' : 'white' }}
        >
          <Link href={`/my_page${value}`}>{key}</Link>
        </li>
      ))}
    </>
  )
}

export default NavTabs
