import { GET } from '../../@core'
import type { responseList, responsePhoto } from './seoul.type'

export const getSeoulAnimalList = (start_index: number, end_index: number) =>
  GET<responseList>(
    `${process.env.NEXT_PUBLIC_SEOUL_URL}/${process.env.NEXT_PUBLIC_SEOUL_LIST_KEY}/json/TbAdpWaitAnimalView/${start_index}/${end_index}/`,
  )

export const getSeoulAnimalImages = (start_index: number, end_index: number) =>
  GET<responsePhoto>(
    `${process.env.NEXT_PUBLIC_SEOUL_URL}/${process.env.NEXT_PUBLIC_SEOUL_PHOTO_KEY}/json/TbAdpWaitAnimalPhotoView/${start_index}/${end_index}/`,
  )
