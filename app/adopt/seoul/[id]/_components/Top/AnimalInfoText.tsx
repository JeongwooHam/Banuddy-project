'use client'

import LikeButton from './LikeButton'
import { useAtom } from 'jotai'
import AdmissionDate from './AdmissionDate'
import InformationList from './InformationList'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import { useRouter } from 'next/navigation'
import { Seoul } from '@/store'

const AnimalInfoText: React.FC = () => {
  const [targetAnimal] = useAtom(Seoul.animalAtom)
  const router = useRouter()

  if (targetAnimal) {
    const { ENTRNC_DATE, NM, SPCS } = targetAnimal.list

    return (
      <div className="w-[450px]">
        <div className="flex justify-between pb-[20px] border-b-[1px] border-gray-200">
          <div className="text-[36px] font-bold">{NM.split('(')[0]}</div>
          <LikeButton />
        </div>
        <InformationList list={targetAnimal.list} />
        <AdmissionDate date={ENTRNC_DATE} />
        <button
          onClick={() =>
            router.push(
              `/application/adopt?animalName=${encodeURIComponent(
                NM.split('(')[0],
              )}&shelterName=${encodeURIComponent(
                NM.split('(')[1].split(')')[0],
              )}`,
            )
          }
          className="w-[450px] p-[8px] mt-[27px] rounded-md bg-primary-300 text-[24px] border-none"
        >
          입양하러 가기
        </button>
      </div>
    )
  }
}

export default AnimalInfoText
