type value = {
  title: string
  valueArray: string[]
}

const animalcategory = ['전체', '개', '고양이', '기타']
const animalSex = ['전체', '암컷', '수컷']
const adoptState = ['전체', '입양대기', '입양진행중', '입양완료']
const fosterState = ['전체', '센터보호중', '임시보호중']

export const filterValue: value[] = [
  { title: '동물구분', valueArray: animalcategory },
  { title: '성별', valueArray: animalSex },
  { title: '입양상태', valueArray: adoptState },
  { title: '임시보호상태', valueArray: fosterState },
]
