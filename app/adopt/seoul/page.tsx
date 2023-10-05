import Title from '../_components/Title'
import AnimalFilter from '../_components/Filter'
import AnimalList from '../_components/AnimalList'
import ScrollToTop from '@/components/scrollToTop/scrollToTop'

const AdoptSeoul: React.FC = () => {
  return (
    <>
      <div className="bg-primary-100 pb-[60px]">
        <Title isSeoul={true} />
        <AnimalFilter isSeoul={true} />
        <AnimalList />
      </div>
      <ScrollToTop />
    </>
  )
}

export default AdoptSeoul
