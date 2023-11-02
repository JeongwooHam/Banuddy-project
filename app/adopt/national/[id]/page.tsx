'use client'

import { National } from '@/store'
import { useAtomValue } from 'jotai'

const Detail: React.FC = () => {
  const targetAnimal = useAtomValue(National.animalAtom)

  console.log('전국', targetAnimal)
  return <div>전국 동물 공고 상세 페이지</div>
}

export default Detail
