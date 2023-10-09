import { GET } from '../../@core'
import type {
  responseAbandonedPublic,
  responseSido,
  responseSigungu,
} from './national.type'

export const getSido = () =>
  GET<responseSido>(
    `${process.env.NEXT_PUBLIC_NATIONAL_SIDO_URL}?serviceKey=${process.env.NEXT_PUBLIC_NATIONAL_KEY}&_type=json`,
  )

export const getSigungu = (sido: number) =>
  GET<responseSigungu>(
    `${process.env.NEXT_PUBLIC_NATIONAL_SIGUNGU_URL}?serviceKey=${
      process.env.NEXT_PUBLIC_NATIONAL_KEY
    }&upr_cd=${sido + ''}&_type=json`,
  )

export const getAbandonmentPublic = () =>
  GET<responseAbandonedPublic>(
    `${process.env.NEXT_PUBLIC_NATIONAL_ANIMAL_URL}?serviceKey=${process.env.NEXT_PUBLIC_NATIONAL_KEY}&_type=json`,
  )
