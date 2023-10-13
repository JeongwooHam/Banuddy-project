import { GET } from '../../@core'
import type {
  Photo,
  Row,
  mergedItem,
  responseList,
  responsePhoto,
} from './seoul.type'

export const getSeoulAnimalList = (start_index: number, end_index: number) =>
  GET<responseList>(
    `${process.env.NEXT_PUBLIC_SEOUL_URL}/${process.env.NEXT_PUBLIC_SEOUL_LIST_KEY}/json/TbAdpWaitAnimalView/${start_index}/${end_index}/`,
  )

export const getSeoulAnimalImages = (start_index: number, end_index: number) =>
  GET<responsePhoto>(
    `${process.env.NEXT_PUBLIC_SEOUL_URL}/${process.env.NEXT_PUBLIC_SEOUL_PHOTO_KEY}/json/TbAdpWaitAnimalPhotoView/${start_index}/${end_index}`,
  )

export const getMergedData = async (listEnd: number, imageEnd: number) => {
  // const [animalListRes, setAnimalListRes] = useState<responseList>()
  // const [animalPhotoRes, setAnimalPhotoRes] = useState<responsePhoto>()

  // useEffect(() => {
  //   const fetch = async () => {
  //     setAnimalListRes(await getSeoulAnimalList(1, 28))
  //     setAnimalPhotoRes(await getSeoulAnimalImages(1, 250))
  //   }
  //   fetch()
  // }, [])

  const animalListRes = await getSeoulAnimalList(1, listEnd)
  const animalPhotoRes = await getSeoulAnimalImages(1, imageEnd)

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
    }
    mergedArray.push(mergedItem)
  }

  const animalWithPhoto = mergedArray.filter(
    (animal) => typeof animal.photo !== undefined && animal.photo?.length,
  )

  return animalWithPhoto
}
