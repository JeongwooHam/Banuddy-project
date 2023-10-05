import { useRouter } from 'next/router'
import AnimalDetail from './_components/AnimalDetail'
import AnimalInfo from './_components/AnimalInfo'
import ImageSlide from './_components/ImageSlide'

const Detail: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <div>{id}</div>
      <div>
        <ImageSlide />
        <AnimalInfo />
      </div>
      <AnimalDetail />
    </>
  )
}

export default Detail
