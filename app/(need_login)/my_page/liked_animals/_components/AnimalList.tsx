import Pagination from '@/components/pagination/pagination'
import OneAnimal from './OneAnimal'
import SampleImage from '/public/images/sampleImage.png'

const AnimalList: React.FC = () => {
  // one animal 데이터 오면 수정
  const animalArray = [
    {
      id: 0,
      imageUrl: SampleImage,
      name: '단지',
      description: '푸들 / 암컷 / 4세 1개월',
    },
    {
      id: 1,
      imageUrl: SampleImage,
      name: '단지',
      description: '푸들 / 암컷 / 4세 1개월',
    },
    {
      id: 2,
      imageUrl: SampleImage,
      name: '단지',
      description: '푸들 / 암컷 / 4세 1개월',
    },
    {
      id: 3,
      imageUrl: SampleImage,
      name: '단지',
      description: '푸들 / 암컷 / 4세 1개월',
    },
    {
      id: 4,
      imageUrl: SampleImage,
      name: '단지',
      description: '푸들 / 암컷 / 4세 1개월',
    },
    {
      id: 5,
      imageUrl: SampleImage,
      name: '단지',
      description: '푸들 / 암컷 / 4세 1개월',
    },
  ]

  return (
    <div className="w-[800px] mt-[30px]">
      <div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {animalArray.map(({ id, imageUrl, name, description }) => (
            <OneAnimal
              animalId={id}
              imageUrl={imageUrl}
              name={name}
              description={description}
            />
          ))}
        </div>
      </div>
      <Pagination total={5} currentPage={1} limit={1} />
    </div>
  )
}

export default AnimalList
