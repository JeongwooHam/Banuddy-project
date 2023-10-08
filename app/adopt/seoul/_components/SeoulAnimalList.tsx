import Pagination from '@/components/pagination/pagination'
import OneSeoulAnimal from './OneSeoulAnimal'
import AnimalFilter from '../../_components/Filter'
import { responseList } from '@/app/api/adopt/seoul/seoul.type'
import { getSeoulAnimalList } from '@/app/api/adopt/seoul/seoul.api'

const SeoulAnimalList: React.FC = async () => {
  const animalListRes: responseList = await getSeoulAnimalList(1, 8)
  console.log('res', animalListRes)

  return (
    <>
      <AnimalFilter isSeoul={true} />
      <div className="w-content m-auto mt-[50px]">
        <div>
          <div className="font-bold mb-10 text-[24px]">
            동물 공고 <span className="text-brown-200">{8}</span>건
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-8">
            {animalListRes?.TbAdpWaitAnimalView?.row.map((animal) => (
              <OneSeoulAnimal animal={animal} key={Math.random() * 1000} />
            ))}
          </div>
        </div>
        <Pagination totalPages={5} currentPage={1} />
      </div>
    </>
  )
}

export default SeoulAnimalList
