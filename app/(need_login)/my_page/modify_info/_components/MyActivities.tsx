import { useRouter } from 'next/navigation'
import Title from '../../_components/Title'

const MyActivities = () => {
  // 데이터 들어오면 배열 수정
  const activityArray = [
    { key: '관심동물', value: '10건' },
    { key: '봉사신청', value: '10건' },
    { key: '관심봉사센터', value: '10건' },
  ]

  return (
    <div className="mb-[30px]">
      <Title text="나의 활동" />
      <div className="flex w-[700px] h-[111px] justify-center rounded-[10px] bg-gray-100">
        {activityArray.map(({ key, value }) => (
          <div className="w-[220px] text-center pt-[20px]">
            <div className="mb-[15px] font-[600] text-[18px]">{key}</div>
            <div className="text-[20px] underline">{value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyActivities
