'use client'

import OneCard from '@/components/card/card'
import { useRouter } from 'next/navigation'
import LikeButton from './LikeButton'
import { ShelterProps } from './ShelterList'

const OneShelter: React.FC<ShelterProps> = ({
  title,
  address,
  operationTime,
  phoneNumber,
}) => {
  const router = useRouter()

  return (
    <>
      <OneCard
        boxStyle="w-content h-auto m-center bg-white pt-[25px] mt-[20px] border-slate-200 cursor-auto"
        content={
          <div>
            <div className="text-[20px] font-bold">
              <span className="text-gray-400 mr-[10px]">{title}</span>
              <LikeButton />
            </div>
            <div className="text-gray-300">{address}</div>
            <div className="flex justify-between">
              <div>
                <div className="text-gray-300">{operationTime}</div>
                <div>{phoneNumber}</div>
              </div>
              <button
                className="w-[131px] h-[44px] bg-slate-300 font-bold"
                onClick={() => router.push(`/application/volunteer`)}
              >
                봉사 신청하기
              </button>
            </div>
          </div>
        }
      />
    </>
  )
}

export default OneShelter
