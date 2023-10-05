import Title from '../_components/Title'
import AnimalFilter from '../_components/Filter'
import AnimalList from '../_components/AnimalList'

const AdoptNational: React.FC = () => {
  return (
    <>
      <Title isSeoul={false} />
      <AnimalFilter isSeoul={false} />
      <AnimalList />
    </>
  )
}

export default AdoptNational
