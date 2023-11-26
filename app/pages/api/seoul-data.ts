import {
  getSeoulAnimalImages,
  getSeoulAnimalList,
} from '@/app/api/adopt/seoul/seoul.api'
import { Photo, Row, mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const listEnd = 20
    const photoEnd = 20

    const animalListRes = await getSeoulAnimalList(1, listEnd)
    const animalPhotoRes = await getSeoulAnimalImages(1, photoEnd)

    const mergedArray: Array<{
      animalNo: number
      list: Row
      photo?: Photo[]
    }> = []

    if (!animalListRes) {
      return res.status(500).json({ error: '정보 fetch 실패' })
    }

    for (const row of animalListRes.TbAdpWaitAnimalView.row) {
      const mergedItem: mergedItem = {
        animalNo: row.ANIMAL_NO,
        list: row,
        photo: undefined,
      }

      if (!animalPhotoRes) {
        return res.status(500).json({ error: '사진 fetch 실패' })
      }

      const matchingPhoto = animalPhotoRes.TbAdpWaitAnimalPhotoView.row.filter(
        (photo) => photo.ANIMAL_NO === row.ANIMAL_NO,
      )

      if (matchingPhoto) {
        mergedItem.photo = [...matchingPhoto]
      }
      mergedArray.push(mergedItem)
    }

    let animalWithPhoto = mergedArray.filter(
      (animal) => typeof animal.photo !== undefined && animal.photo?.length,
    )

    return res.status(200).json(animalWithPhoto)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: '에러' })
  }
}
