import { Row } from '@/app/api/adopt/seoul/seoul.type'

interface ListProps {
  list: Row
}

const InformationList: React.FC<ListProps> = ({ list }) => {
  const { BREEDS, SEXDSTN, AGE, BDWGH, ENTRNC_DATE, NM } = list

  const sampleInfo = [
    { key: '종/품종', value: BREEDS },
    { key: '성별', value: SEXDSTN === 'W' ? '암컷' : '수컷' },
    { key: '나이', value: AGE },
    { key: '체중', value: `${BDWGH} kg` },
    { key: '입소날짜', value: ENTRNC_DATE },
    { key: '보호소명', value: NM.split('(')[1].split(')')[0] },
  ]

  return (
    <div>
      {sampleInfo.map(({ key, value }) => (
        <div className="flex text-[20px] mt-[27px]" key={Math.random() * 1000}>
          <div className="text-gray-200">{key}</div>
          <div className="ml-[30px]">{value}</div>
        </div>
      ))}
    </div>
  )
}

export default InformationList
