export type responseShelter = {
  response: {
    header: {
      reqNo: number
      resultCode: string
      resultMsg: string
    }
    body: Body
  }
}

export interface Body {
  items: Shelter[]
  numOfRows: number
  pageNo: number
  totalCount: number
}

export interface Shelter {
  careNm: string
  orgNm: string
  divisionNm: string
  saveTrgtAnimal?: string
  careAddr: string
  jibunAddr: string
  lat?: number
  lng?: number
  dsignationDate?: string
  weekOprStime?: string
  weekOprEtime?: string
  weekCellStime?: string
  weekCellEtime?: string
  weekendOprStime?: string
  weekendOprEtime?: string
  weekendCellStime?: string
  weekendCellEtime?: string
  closeDay?: string
  vetPersonCnt?: number
  specsPersonCnt?: number
  medicalCnt?: number
  breedCnt?: number
  quarabtineCnt?: number
  feedCnt?: number
  transCarCnt?: number
  careTel: string
  dataStdDt: string
}
