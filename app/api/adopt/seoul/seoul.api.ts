import type { responseList } from './seoul.type'

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

export const getSeoulAnimalImages = () => {}
