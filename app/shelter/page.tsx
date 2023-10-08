import ShelterFilter from './_components/Filter'
import ShelterList from './_components/ShelterList'
import Title from './_components/Title'

export default function Shelter() {
  return (
    <div className="bg-primary-100 pb-[60px]">
      <Title />
      <ShelterFilter />
      <ShelterList />
    </div>
  )
}
