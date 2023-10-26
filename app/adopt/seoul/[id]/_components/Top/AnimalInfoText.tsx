'use client'

import LikeButton from './LikeButton'
import { useAtom } from 'jotai'
import { animalAtom } from '../../../_components/OneSeoulAnimal'
import AdmissionDate from './AdmissionDate'
import RouteButton from './RouteButton'
import InformationList from './InformationList'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'

const AnimalInfoText: React.FC = () => {
  const [targetAnimal] = useAtom(animalAtom)

  if (targetAnimal) {
    const target = targetAnimal as mergedItem
    const { ENTRNC_DATE, NM, SPCS } = target.list

    return (
      <div className="w-[450px]">
        <div className="flex justify-between pb-[20px] border-b-[1px] border-gray-200">
          <div className="text-[36px] font-bold">{NM.split('(')[0]}</div>
          <LikeButton />
        </div>
        <InformationList list={target.list} />
        <AdmissionDate date={ENTRNC_DATE} />
        <RouteButton />
      </div>
    )
  }
}

export default AnimalInfoText
