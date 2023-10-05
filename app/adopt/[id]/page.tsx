import { useRouter } from 'next/navigation'
import AnimalDetail from './_components/AnimalDetail'
import AnimalInfo from './_components/AnimalInfo'
import AnimalPolaroid from './_components/AnimalPolaroid'

const Detail: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between w-content m-center mb-[100px]">
        <AnimalPolaroid name="뚜비" />
        <AnimalInfo />
      </div>
      <AnimalDetail type="dog" />
    </div>
  )
}

export default Detail
