import AnimalList from './_components/AnimalList'

export default function likedAnimals() {
  return (
    <>
      <div className="text-[25px] font-bold mb-[10px]">관심동물공고</div>
      <div>00 를 통해 입양신청을 한 내역을 확인할 수 있어요.</div>
      <AnimalList />
    </>
  )
}
