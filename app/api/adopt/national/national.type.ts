// 시도조회
export type responseSido = {
  response: {
    header: {
      reqNo: number
      resultCode: string
      resultMsg: string
    }
    body: {
      items: {
        item: Array<{
          orgCd: string
          orgdownNm: string
        }>
      }
      numOfRows: number
      pageNo: number
      totalCount: number
    }
  }
}

// 시군구조회
export type responseSigungu = {
  response: {
    header: {
      reqNo: number
      resultCode: string
      resultMsg: string
    }
    body: {
      items: {
        item: Array<{
          uprCd: string
          orgCd: string
          orgdownNm: string
        }>
      }
    }
  }
}

// 유기동물 조회
export type responseAbandonedPublic = {
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
  items: {
    item: Array<Animal>
  }
  numOfRows: number
  pageNo: number
  totalCount: number
}

export interface Animal {
  animalNo: string
  list: {
    age: string
    careAddr: string
    careNm: string
    careTel: string
    chargeNm: string
    colorCd: string
    desertionNo: string
    filename: string
    happenDt: string
    happenPlace: string
    kindCd: string
    neuterYn: string
    noticeEdt: string
    noticeNo: string
    noticeSdt: string
    officetel: string
    orgNm: string
    popfile: string
    processState: string
    sexCd: string
    specialMark: string
    weight: string
  }
}
