import { GET } from '../@core'
import { requestShelter, responseShelter } from './shelter.type'

export const getShelterList = ({}: requestShelter) =>
  GET<responseShelter>(
    `${process.env.NEXT_PUBLIC_NATIONAL_SHELTER_URL}?serviceKey=${process.env.NEXT_PUBLIC_NATIONAL_KEY}&_type=json`,
  )
