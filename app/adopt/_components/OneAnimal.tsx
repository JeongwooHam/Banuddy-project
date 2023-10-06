'use client'

import OneCard from '@/components/card/card'
import Image from 'next/image'
import SampleImage from '/public/images/sampleImage.png'
import { useRouter } from 'next/navigation'

interface AnimalProps {
  id: number
  // API 호출 시 추가 예정
}

const OneAnimal: React.FC<AnimalProps> = ({ id }) => {
  const router = useRouter()

  const boxContent = (
    <div onClick={() => router.push(`/adopt/${id + ''}`)}>
      <div>
        <Image src={SampleImage} alt="sample" />
      </div>
      <div className="text-center">
        <div className="font-script text-xl">단지</div>
        <div className="text-gray-300">푸들 / 암컷 / 4세 1개월</div>
      </div>
    </div>
  )

  return (
    <>
      <OneCard
        boxStyle="w-56 h-auto rounded bg-white pt-[25px] border-slate-200"
        content={boxContent}
      />
    </>
  )
}

export default OneAnimal
