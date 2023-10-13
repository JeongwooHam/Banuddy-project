'use client'

import OneCard from '@/components/card/card'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'

interface AnimalProps {
  // API 호출 시 수정 예정
  animalId: number
  imageUrl: StaticImageData
  name: string
  description: string
}

const OneAnimal: React.FC<AnimalProps> = ({
  animalId,
  imageUrl,
  name,
  description,
}) => {
  const router = useRouter()

  return (
    <>
      <OneCard
        boxStyle="w-56 h-auto rounded bg-white pt-[25px] border-slate-200"
        content={
          <div onClick={() => router.push(`/adopt/${animalId + ''}`)}>
            <div>
              <Image src={imageUrl} alt="sample" />
            </div>
            <div className="text-center">
              <div className="font-script text-xl">{name}</div>
              <div className="text-gray-300">{description}</div>
            </div>
          </div>
        }
      />
    </>
  )
}

export default OneAnimal
