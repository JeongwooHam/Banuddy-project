import Image from 'next/image'
import { useAtomValue } from 'jotai'
import { National } from '@/store'

export const AnimalPolaroid: React.FC = () => {
  const { list } = useAtomValue(National.animalAtom)

  const formattedDes = list?.specialMark
    .split('.')
    .map((text) => <div className="text-[20px] my-3">{text}</div>)

  if (list)
    return (
      <div className="w-[420px] border-solid border-[1px] border-gray-100 shadow relative">
        <Image
          src={list.filename}
          alt="공고 이미지"
          width={350}
          height={350}
          className="m-auto mt-[30px]"
        />
        <div className="absolute top-[50px] left-[50px] w-[70px] h-[70px] bg-primary-300 rounded-full p-[10px] text-center leading-[50px]">
          {list.processState}
        </div>
        <div className="m-auto text-center w-[360px] mt-[30px] mb-[30px]">
          {formattedDes}
        </div>
      </div>
    )
}
