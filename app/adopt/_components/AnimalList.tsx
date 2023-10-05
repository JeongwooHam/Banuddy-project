import Pagination from '@/components/pagination/pagination'
import OneAnimal from './OneAnimal'

const AnimalList: React.FC = () => {
  // one animal 데이터 오면 map으로 수정
  return (
    <div className="w-content m-auto mt-[50px]">
      <div>
        <div className="font-bold mb-10 text-[24px]">
          동물 공고 <span className="text-brown-200">{8}</span>건
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-8">
          <OneAnimal />
          <OneAnimal />
          <OneAnimal />
          <OneAnimal />
          <OneAnimal />
          <OneAnimal />
          <OneAnimal />
          <OneAnimal />
        </div>
      </div>
      <Pagination totalPages={5} currentPage={1} />
    </div>
  )
}

export default AnimalList
