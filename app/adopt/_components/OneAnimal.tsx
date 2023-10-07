import OneCard from '@/components/card/card'
import Image from 'next/image'
import SampleImage from '/public/images/sampleImage.png'

const OneAnimal: React.FC = () => {
  const boxContent = (
    <div>
      <div>
        <Image src={SampleImage} alt="sample" />
      </div>
      <div className="text-center">
        <div className="font-script text-xl">단지</div>
        <div className="text-gray-300">푸들 / 암컷 / 4세 1개월</div>
      </div>
    </div>
  )

  return (
    <>
      <OneCard
        boxStyle="w-56 h-auto rounded  pt-[25px] border-slate-200"
        content={boxContent}
      />
    </>
  )
}

export default OneAnimal
