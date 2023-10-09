'use client'

import OneCard from '@/components/card/card'
import { useRouter } from 'next/navigation'
import LikeButton from './LikeButton'
import { Shelter } from '@/app/api/shelter/shelter.type'

export interface ShelterProps {
  key: number
  shelter: Shelter
}

const OneShelter: React.FC<ShelterProps> = ({ shelter }) => {
  const router = useRouter()
  const {
    careAddr,
    careNm,
    careTel,
    weekOprStime,
    weekOprEtime,
    weekendOprStime,
    weekendOprEtime,
  } = shelter

  return (
    <>
      <OneCard
        boxStyle="w-content h-auto m-center bg-white pt-[25px] mt-[20px] border-slate-200 cursor-auto"
        content={
          <div>
            <div className="text-[20px] font-bold">
              <span className="text-gray-400 mr-[10px]">{careNm}</span>
              <LikeButton />
            </div>
            <div className="text-gray-300">{careAddr}</div>
            <div className="flex justify-between">
              <div>
                <div className="text-gray-300">
                  월-금: {weekOprStime} - {weekOprEtime}, 주말:{' '}
                  {weekendOprStime} - {weekendOprEtime}
                </div>
                <div>{careTel}</div>
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
