import Title from '../_components/Title'
import AnimalFilter from '../_components/Filter'
import AnimalList from '../_components/AnimalList'
import NationalAnimalList from './_components/NationalAnimalList'

const AdoptNational: React.FC = () => {
  return (
    <div className="bg-primary-100 pb-[60px]">
      <Title isSeoul={false} />
      <NationalAnimalList />
    </div>
  )
}

export default AdoptNational
