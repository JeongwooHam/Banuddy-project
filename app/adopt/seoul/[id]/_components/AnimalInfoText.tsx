'use client'

import LikeButton from './LikeButton'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { animalAtom } from '../../_components/OneSeoulAnimal'
import { mergedItem } from '../../_components/SeoulAnimalList'
import { colorMatch } from '@/constants/colorMatch'
import getPeriod from '@/lib/getPeriod'

const AnimalInfoText: React.FC = () => {
  const [targetAnimal] = useAtom(animalAtom)

  if (targetAnimal) {
    const target = targetAnimal as mergedItem
    const { BREEDS, SEXDSTN, AGE, BDWGH, ENTRNC_DATE, NM, SPCS } = target.list

    const dynamicClassName = `w-[450px] p-[8px] mt-[27px] rounded-md bg-primary-300 text-[24px] border-none`

    const sampleInfo = [
      { key: '종/품종', value: BREEDS },
      { key: '성별', value: SEXDSTN === 'W' ? '암컷' : '수컷' },
      { key: '나이', value: AGE },
      { key: '체중', value: `${BDWGH} kg` },
      { key: '입소날짜', value: ENTRNC_DATE },
      { key: '보호소명', value: NM.split('(')[1].split(')')[0] },
    ]

    const date = ENTRNC_DATE.replaceAll('-', '')
    const period = getPeriod(date, 'YYYYMMDD')
    console.log('date', period)

    const router = useRouter()

    return (
      <div className="w-[450px]">
        <div className="flex justify-between pb-[20px] border-b-[1px] border-gray-200">
          <div className="text-[36px] font-bold">{NM.split('(')[0]}</div>
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
            {period.split(' ')[0]}
          </span>{' '}
          되었어요.
        </div>
        <div>
          <button
            onClick={() => router.push('/application/adopt')}
            className={dynamicClassName}
          >
            입양하러 가기
          </button>
        </div>
      </div>
    )
  }
}

export default AnimalInfoText
