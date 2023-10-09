'use client'

import { useRouter } from 'next/navigation'
import AnimalDetail from './_components/AnimalDetail'
import AnimalPolaroid from './_components/AnimalPolaroid'
import AnimalInfoText from './_components/AnimalInfoText'

interface pageParams {
  params: { id: string }
}

const Detail: React.FC<pageParams> = ({ params }) => {
  console.log('id', params?.id)

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
