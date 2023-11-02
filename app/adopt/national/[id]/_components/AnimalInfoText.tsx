'use client'

import { useRouter } from 'next/navigation'
import { LikeButton } from '.'
import { useAtomValue } from 'jotai'
import { National } from '@/store'

export const AnimalInfoText: React.FC = () => {
  const { list } = useAtomValue(National.animalAtom)

  // 실제 데이터 들어오면 수정 및 타입 정의 필요
  const sampleInfo = [
    { key: '공고기한', value: `${list.noticeSdt} - ${list.noticeEdt}` },
    { key: '성별', value: `${list.sexCd === 'M' ? '수컷' : '암컷'}` },
    { key: '나이', value: list.age },
    { key: '체중', value: list.weight },
    { key: '입소날짜', value: list.noticeSdt },
    { key: '보호소명', value: list.careNm },
    { key: '중성화여부', value: list.neuterYn },
  ]

  const router = useRouter()

  return (
    <div className="w-[450px]">
      <div className="flex justify-between pb-[20px] border-b-[1px] border-gray-200">
        <div className="text-[36px] font-bold">{list.kindCd}</div>
        <LikeButton />
      </div>
      <div>
        {sampleInfo.map(({ key, value }) => (
          <div className="flex text-[20px] mt-[27px]">
            <div className="text-gray-200">{key}</div>
            <div className="ml-[30px]">{value}</div>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => router.push('/application/adopt')}
          className="w-[450px] p-[8px] mt-[27px] rounded-md bg-primary-300 text-[24px] border-none"
        >
          입양하러 가기
        </button>
      </div>
    </div>
  )
}
