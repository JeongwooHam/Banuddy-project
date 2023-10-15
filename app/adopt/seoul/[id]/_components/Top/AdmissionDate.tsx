import getPeriod from '@/lib/getPeriod'

interface DateProps {
  date: string
}

const AdmissionDate: React.FC<DateProps> = ({ date }) => {
  const modified = date.replaceAll('-', '')
  const period = getPeriod(modified, 'YYYYMMDD')

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
