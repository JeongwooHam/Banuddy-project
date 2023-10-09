'use client'

import Pagination from '@/components/pagination/pagination'
import OneShelter from './OneShelter'
import { responseShelter } from '@/app/api/shelter/shelter.type'
import { getShelterList } from '@/app/api/shelter/shelter.api'

const ShelterList: React.FC = async () => {
  const shelterRes: responseShelter = await getShelterList(8)

  if (shelterRes) {
    const shelterArray = shelterRes.response.body.items.item
    return (
      <div className="w-content m-auto mt-[50px]">
        <div className="font-bold mb-10 text-[24px]">
          전체{' '}
          <span className="text-brown-200">
            {shelterRes.response.body.totalCount}
          </span>
          건
        </div>
        {shelterArray.map((shelter) => (
          <OneShelter shelter={shelter} key={Math.random() * 1000} />
        ))}
        <Pagination total={40} currentPage={1} limit={8} />
      </div>
    )
  }
}

export default ShelterList
