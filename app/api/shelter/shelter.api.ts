import { GET } from '../@core'
import { responseShelter } from './shelter.type'

export const getShelterList = () =>
  GET<responseShelter>(
    `${process.env.NEXT_PUBLIC_NATIONAL_SHELTER_URL}?serviceKey=${process.env.NEXT_PUBLIC_NATIONAL_KEY}&_type=json&numOfRows=8`,
  )
