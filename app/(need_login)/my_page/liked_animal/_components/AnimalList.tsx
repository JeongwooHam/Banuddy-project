import OneAnimal from './OneAnimal'

const AnimalList: React.FC = () => {
  return (
    <>
      <div>
        동물 공고 6개
        <OneAnimal />
      </div>
      <div>페이지네이션</div>
    </>
  )
}

export default AnimalList
