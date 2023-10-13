'use client'

import { useRouter } from 'next/navigation'
import AnimalDetail from './_components/Bottom/AnimalDetail'
import AnimalPolaroid from './_components/Top/AnimalPolaroid'
import AnimalInfoText from './_components/Top/AnimalInfoText'

const Detail: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between w-content m-center mb-[100px]">
        <AnimalPolaroid />
        <AnimalInfoText />
      </div>
      <AnimalDetail type="dog" />
    </div>
  )
}

export default Detail
