'use client'

import { Button } from '@/components/button/Button'
import LikeButton from './LikeButton'
import { useRouter } from 'next/navigation'

const AnimalInfoText: React.FC = () => {
  // 실제 데이터 들어오면 수정 및 타입 정의 필요
  const sampleInfo = [
    { key: '종/품종', value: '고양이/메인쿤MIX' },
    { key: '성별', value: '수컷' },
    { key: '나이', value: '2세 0개월' },
    { key: '체중', value: '4.78 kg' },
    { key: '입소날짜', value: '2023.08.22' },
    { key: '보호소명', value: '구로센터' },
  ]

  const router = useRouter()

  return (
    <div className="w-[450px]">
      <div className="flex justify-between pb-[20px] border-b-[1px] border-gray-200">
        <div className="text-[36px] font-bold">이름</div>
        <LikeButton />
      </div>
      <div>
        {sampleInfo.map(({ key, value }) => (
          <div
            className="flex text-[20px] mt-[27px]"
            key={Math.random() * 1000}
          >
            <div className="text-gray-200">{key}</div>
            <div className="ml-[30px]">{value}</div>
          </div>
        ))}
      </div>
      <div className="text-[20px] mt-[27px]">
        보호소에 입소한지{' '}
        <span className="text-[25px] p-[10px] pl-[20px] pr-[20px] ml-[10px] mr-[10px] font-bold border-[3px] border-primary-300 rounded-2xl">
          29일
        </span>{' '}
        되었어요.
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

export default AnimalInfoText
