'use client'

import { National } from '@/store'
import { useAtomValue } from 'jotai'
import { AnimalDetail, AnimalInfoText, AnimalPolaroid } from './_components'

const Detail: React.FC = () => {
  const targetAnimal = useAtomValue(National.animalAtom)

  if (targetAnimal)
    return (
      <div>
        <div className="flex justify-between w-content m-center my-[100px]">
          <AnimalPolaroid />
          <AnimalInfoText />
        </div>
        <AnimalDetail type="dog" />
      </div>
    )
}

export default Detail
