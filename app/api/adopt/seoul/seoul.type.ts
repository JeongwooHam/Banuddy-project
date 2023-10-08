export interface responseList {
  TbAdpWaitAnimalView: TbAdpWaitAnimalView
}

interface TbAdpWaitAnimalView {
  list_total_count: number
  RESULT: Result
  row: Row[]
}

interface Result {
  CODE: string
  MESSAGE: string
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
