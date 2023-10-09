'use client'

import OneCard from '@/components/card/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { Photo, Row } from '@/app/api/adopt/seoul/seoul.type'
import { atom, useAtom } from 'jotai'
import { mergedItem } from './SeoulAnimalList'

interface animalProp {
  key: number
  animal: Row
  images: boolean | Photo[]
}

export const animalAtom = atom<mergedItem | object>({})

const OneSeoulAnimal: React.FC<animalProp> = ({ animal, images }) => {
  const { ANIMAL_NO, NM, BREEDS, SEXDSTN, AGE } = animal
  const router = useRouter()

  const [targetAnimal, setTargetAnimal] = useAtom(animalAtom)

  if (typeof images !== 'boolean')
    return (
      <>
        <OneCard
          boxStyle="w-56 h-auto rounded bg-white pt-[25px] border-slate-200"
          content={
            <div
              onClick={() => {
                setTargetAnimal({
                  ...targetAnimal,
                  animalNo: ANIMAL_NO,
                  list: animal,
                  photo: images,
                })
                router.push(`/adopt/seoul/${ANIMAL_NO + ''}`)
              }}
            >
              <div>
                <Image
                  src={`https://${images[0].PHOTO_URL}`}
                  alt="sample"
                  width="174"
                  height="188"
                />
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
