'use client'

import OneCard from '@/components/card/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { Photo, Row, mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import { atom, useAtom } from 'jotai'
import { Animal } from '@/app/api/adopt/national/national.type'

interface animalProp {
  key: number
  animal: Animal
}

export const animalAtom = atom<Animal | object>({})

const OneNationalAnimal: React.FC<animalProp> = ({ animal }) => {
  const { desertionNo, kindCd, sexCd, age, popfile } = animal
  const router = useRouter()

  const [targetAnimal, setTargetAnimal] = useAtom(animalAtom)

  return (
    <>
      <OneCard
        boxStyle="w-56 h-auto rounded bg-white pt-[25px] border-slate-200"
        content={
          <div
            onClick={() => {
              setTargetAnimal({
                ...targetAnimal,
                animalNo: desertionNo,
                list: animal,
              })
              router.push(`/adopt/seoul/${desertionNo + ''}`)
            }}
          >
            <div className="w-[170px] h-[190px] relative">
              <Image
                src={popfile}
                alt="sample"
                layout="fill"
                // width={170}
                // height={180}
              />
            </div>
            <div className="text-center">
              <div className="font-script text-xl">{kindCd}</div>
              <div className="text-gray-300">
                {sexCd === 'W' ? '암컷' : '수컷'} / {age}
              </div>
            </div>
          </div>
        }
      />
    </>
  )
}

export default OneNationalAnimal
