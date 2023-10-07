import Pagination from '@/components/pagination/pagination'
import OneShelter from './OneShelter'

export interface ShelterProps {
  title: string
  address: string
  operationTime: string
  phoneNumber: string
}

const ShelterList: React.FC = () => {
  const shelterArray: ShelterProps[] = [
    {
      title: '서울동물복지지원센터',
      address: '서울특별시 마포구 매봉산로 31 (상암동) 에스플렉스센터 지하1층',
      operationTime: '운영시간 : (월-금) 09:00 ~ 18:00',
      phoneNumber: '02-2124-2839',
    },
    {
      title: '서울동물복지지원센터',
      address: '서울특별시 마포구 매봉산로 31 (상암동) 에스플렉스센터 지하1층',
      operationTime: '운영시간 : (월-금) 09:00 ~ 18:00',
      phoneNumber: '02-2124-2839',
    },
    {
      title: '서울동물복지지원센터',
      address: '서울특별시 마포구 매봉산로 31 (상암동) 에스플렉스센터 지하1층',
      operationTime: '운영시간 : (월-금) 09:00 ~ 18:00',
      phoneNumber: '02-2124-2839',
    },
    {
      title: '서울동물복지지원센터',
      address: '서울특별시 마포구 매봉산로 31 (상암동) 에스플렉스센터 지하1층',
      operationTime: '운영시간 : (월-금) 09:00 ~ 18:00',
      phoneNumber: '02-2124-2839',
    },
  ]

  return (
    <div className="w-content m-auto mt-[50px]">
      <div className="font-bold mb-10 text-[24px]">
        전체 <span className="text-brown-200">{8}</span>건
      </div>
      {shelterArray.map(({ title, address, operationTime, phoneNumber }) => (
        <OneShelter
          title={title}
          address={address}
          operationTime={operationTime}
          phoneNumber={phoneNumber}
        />
      ))}
      <Pagination totalPages={5} currentPage={1} />
    </div>
  )
}

export default ShelterList
