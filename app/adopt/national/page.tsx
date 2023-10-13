import Title from '../_components/Title'
import AnimalFilter from '../_components/Filter'
import AnimalList from '../_components/AnimalList'

const AdoptNational: React.FC = () => {
  return (
    <div className="bg-primary-100 pb-[60px]">
      <Title isSeoul={false} />
      <AnimalFilter isSeoul={false} />
      <AnimalList />
    </div>
  )
}

export default AdoptNational
