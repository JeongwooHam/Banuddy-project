import OneCard from '@/components/card/card'

const OneAnimal: React.FC = () => {
  const boxContent = (
    <div>
      <div>이미지</div>
      <div>이름</div>
      <div>설명</div>
    </div>
  )

  return (
    <>
      <OneCard boxStyle="w-56 h-auto rounded" content={boxContent} />
    </>
  )
}

export default OneAnimal
