interface Result {
  CODE: string
  MESSAGE: string
}

// 서울시 입양 공고 목록
export interface responseList {
  TbAdpWaitAnimalView: TbAdpWaitAnimalView
}

interface TbAdpWaitAnimalView {
  list_total_count: number
  RESULT: Result
  row: Row[]
}

export interface Row {
  ANIMAL_NO: number
  NM: string
  ENTRNC_DATE: string
  SPCS: string
  BREEDS: string
  SEXDSTN: string
  AGE: string
  BDWGH: number
  ADP_STTUS: string
  TMPR_PRTC_STTUS: string
  INTRCN_MVP_URL: string
  INTRCN_CN: string
  TMPR_PRTC_CN: string
}

// 서울시 공고 동물 이미지
export interface responsePhoto {
  TbAdpWaitAnimalPhotoView: TbAdpWaitAnimalPhotoView
}

interface TbAdpWaitAnimalPhotoView {
  list_total_count: number
  RESULT: Result
  row: Photo[]
}

export interface Photo {
  ANIMAL_NO: number
  PHOTO_KND: string
  PHOTO_NO: number
  PHOTO_URL: string
}

export interface mergeProps {
  listEnd: number
  photoEnd: number
  filter?: {
    cate: string
    sex: string
    adopt: string
    foster: string
    name: string | null
    isSubmit: boolean
  }
}

export interface mergedItem {
  animalNo: number
  list: Row
  photo?: Photo[] | undefined
}
