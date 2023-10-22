import { getDiff } from '@/lib/getDiff'

interface DateProps {
  date: string
}

const AdmissionDate: React.FC<DateProps> = ({ date }) => {
  const period = getDiff(date)

  return (
    <div className="text-[20px] mt-[27px]">
      보호소에 입소한지{' '}
      <span className="text-[25px] p-[10px] pl-[20px] pr-[20px] ml-[10px] mr-[10px] font-bold border-[3px] border-primary-300 rounded-2xl">
        {period.split(' ')[0]}
      </span>{' '}
      되었어요.
    </div>
  )
}

export default AdmissionDate
