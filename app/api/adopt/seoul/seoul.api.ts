import type { responseList, responsePhoto } from './seoul.type'

export const getSeoulAnimalList = async (
  start_index: number,
  end_index: number,
): Promise<responseList> => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_SEOUL_URL}/${process.env.NEXT_PUBLIC_SEOUL_LIST_KEY}/json/TbAdpWaitAnimalView/${start_index}/${end_index}/`,
    { next: { revalidate: 3600 } },
  )

  const animalList: responseList = await results.json()
  return animalList
}

export const getSeoulAnimalImages = async (
  start_index: number,
  end_index: number,
): Promise<responsePhoto> => {
  const results = await fetch(
    `${process.env.NEXT_PUBLIC_SEOUL_URL}/${process.env.NEXT_PUBLIC_SEOUL_PHOTO_KEY}/json/TbAdpWaitAnimalPhotoView/${start_index}/${end_index}/`,
    { cache: 'no-store' },
  )

  const animalPhoto: responsePhoto = await results.json()
  return animalPhoto
}
