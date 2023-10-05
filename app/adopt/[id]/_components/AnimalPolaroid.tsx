import Image from 'next/image'
import ImageSlide from './ImageSlide'
import Cat from '/public/icons/cat.svg'

type animalProp = { name: string }

const AnimalPolaroid: React.FC<animalProp> = ({ name }) => {
  return (
    <div className="w-[500px] border-solid border-[1px] border-gray-100 shadow relative">
      <ImageSlide />
      <div className="absolute top-[80px] left-[90px] w-[70px] h-[70px] bg-primary-300 rounded-full p-[10px]">
        <p className="w-[40px] ml-[5px] text-center">입양상태</p>
      </div>
      <div className="flex mt-[30px]">
        <span className="mb-[-17px]">
          <Image src={Cat} alt="cat" />
        </span>
        <div className="text-[24px] ml-[30px] text-center">
          안녕하세요 저는 <span className="text-[40px] font-bold">{name}</span>
          입니다.
        </div>
      </div>
    </div>
  )
}

export default AnimalPolaroid
