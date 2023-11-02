import { getDiff } from '@/lib/getDiff'
import { National } from '@/store'
import { useAtomValue } from 'jotai'
import { ReactNode } from 'react'

interface animalProps {
  type: 'cat' | 'dog' | 'others'
}

export const AnimalDetail: React.FC<animalProps> = ({ type }) => {
  const { list } = useAtomValue(National.animalAtom)

  const category = list.kindCd.split(']')[0].replace('[', '')

  const foundDate = getDiff(list.happenDt)

  const endDate = getDiff(list.noticeEdt)

  const colorMatch = {
    cat: 'primary',
    dog: 'brown',
    others: 'subColor',
  }

  const textList = [
    <div>{list.happenPlace}에서</div>,
    <div>
      {foundDate} 전 발견된 {category === '개' ? '강아지' : '고양이'}
      입니다.
    </div>,
    <div>
      공고 종료일까지{' '}
      <span className="bg-primary-200">
        {endDate === '하루' ? endDate : endDate + '일'}
      </span>{' '}
      남아있어요.
    </div>,
    <div>
      아이를 보호하고 싶으신 분들은{' '}
      <span className="border-b-[5px] border-b-primary-200">{list.orgNm}</span>
      에 위치한
    </div>,
    <div>
      <span className="bg-primary-200">{list.careNm}</span>{' '}
      {`(${list.careTel})`}로 연락주세요.
    </div>,
  ]

  const textBox = (children: ReactNode) => (
    <div className="border-b-[2px] border-b-primaryGray-300">{children}</div>
  )

  return (
    <div className="bg-primary-100 text-[24px] leading-[70px] py-10">
      <div className="w-content m-center text-center mb-[30px]">
        {textList.map((text) => textBox(text))}
      </div>
    </div>
  )
}
