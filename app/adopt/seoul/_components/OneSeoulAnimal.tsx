'use client'

import OneCard from '@/components/card/card'
import Image from 'next/image'
import SampleImage from '/public/images/sampleImage.png'
import { useRouter } from 'next/navigation'
import type { Photo, Row } from '@/app/api/adopt/seoul/seoul.type'

interface animalProp {
  key: number
  animal: Row
  thumbnail: boolean | string
}

const OneSeoulAnimal: React.FC<animalProp> = ({ animal, thumbnail }) => {
  const { ANIMAL_NO, NM, BREEDS, SEXDSTN, AGE } = animal
  const router = useRouter()

  const imageUrl: string = 'https://' + thumbnail
  console.log('썸네일', imageUrl)

  if (typeof thumbnail !== 'boolean')
    return (
      <>
        <OneCard
          boxStyle="w-56 h-auto rounded bg-white pt-[25px] border-slate-200"
          content={
            <div onClick={() => router.push(`/adopt/${ANIMAL_NO + ''}`)}>
              <div>
                <Image src={imageUrl} alt="sample" width={174} height={188} />
              </div>
              <div className="text-center">
                <div className="font-script text-xl">{NM}</div>
                <div className="text-gray-300">
                  {BREEDS} / {SEXDSTN === 'W' ? '암컷' : '수컷'} / {AGE}
                </div>
              </div>
            </div>
          }
        />
      </>
    )
}

export default OneSeoulAnimal
