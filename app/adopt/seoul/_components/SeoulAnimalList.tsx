import Pagination from '@/components/pagination/pagination'
import OneSeoulAnimal from './OneSeoulAnimal'
import AnimalFilter from '../../_components/Filter'
import {
  Photo,
  Row,
  responseList,
  responsePhoto,
} from '@/app/api/adopt/seoul/seoul.type'
import {
  getSeoulAnimalImages,
  getSeoulAnimalList,
} from '@/app/api/adopt/seoul/seoul.api'
import SampleImage from '/public/assets/sample.svg'

export interface mergedItem {
  animalNo: number
  list: Row
  photo: Photo[] | undefined
}

const SeoulAnimalList: React.FC = async () => {
  // const [animalListRes, setAnimalListRes] = useState<responseList>()
  // const [animalPhotoRes, setAnimalPhotoRes] = useState<responsePhoto>()

  // useEffect(() => {
  //   const fetch = async () => {
  //     setAnimalListRes(await getSeoulAnimalList(1, 28))
  //     setAnimalPhotoRes(await getSeoulAnimalImages(1, 250))
  //   }
  //   fetch()
  // }, [])

  const animalListRes = await getSeoulAnimalList(1, 28)
  const animalPhotoRes = await getSeoulAnimalImages(1, 250)

  const mergedArray: Array<{ animalNo: number; list: Row; photo?: Photo[] }> =
    []

  if (!animalListRes) {
    return null
  }

  for (const row of animalListRes.TbAdpWaitAnimalView.row) {
    const mergedItem: mergedItem = {
      animalNo: row.ANIMAL_NO,
      list: row,
      photo: undefined,
    }

    if (!animalPhotoRes) {
      return null
    }

    const matchingPhoto = animalPhotoRes.TbAdpWaitAnimalPhotoView.row.filter(
      (photo) => photo.ANIMAL_NO === row.ANIMAL_NO,
    )

    if (matchingPhoto) {
      mergedItem.photo = [...matchingPhoto]
    } else {
      mergedItem.photo = [SampleImage]
    }

    mergedArray.push(mergedItem)
  }

  const animalWithPhoto = mergedArray.filter(
    (animal) => typeof animal.photo !== undefined && animal.photo?.length,
  )

  // const [category] = useAtom(categoryAtom)
  // const filteredList = animalWithPhoto.filter((animal) => {
  //   if (category) return animal.list.SPCS === category
  //   return animal
  // })

  return (
    <>
      {/* <AnimalFilter isSeoul={true} /> */}
      <div className="w-content m-auto mt-[50px]">
        <div>
          <div className="font-bold mb-10 text-[24px]">
            동물 공고{' '}
            <span className="text-brown-200">{animalWithPhoto.length}</span>건
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-8">
            {animalWithPhoto.slice(0, 8).map((animal) => (
              <OneSeoulAnimal
                animal={animal.list}
                images={!!animal.photo && animal.photo}
                key={Math.random() * 1000}
              />
            ))}
          </div>
        </div>
        <Pagination total={animalWithPhoto.length} currentPage={1} limit={8} />
      </div>
    </>
  )
}

export default SeoulAnimalList
