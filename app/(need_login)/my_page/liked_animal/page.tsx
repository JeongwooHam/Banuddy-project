import AnimalList from './_components/AnimalList'

const LikedAnimals: React.FC = () => {
  return (
    <>
      <div>
        <h1>관심동물공고</h1>
        <div>00 를 통해 입양신청을 한 내역을 확인할 수 있어요.</div>
      </div>
      <AnimalList />
    </>
  )
}

export default LikedAnimals
