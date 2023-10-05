'use client'

import CommonSelect from '@/components/select/select'
import { filterValue } from './constants/filterValue'

const AnimalFilter: React.FC = () => {
  return (
    <div className="bg-brown-100 w-content m-auto mt-[100px] rounded-[3px] p-7">
      <div className="flex justify-between w-[800px]">
        {filterValue.map(({ title, valueArray }) => (
          <div>
            <div className="text-base font-bold mb-2">{title}</div>
            <CommonSelect selectValue={valueArray} />
          </div>
        ))}
      </div>
      <div>
        <div>이름</div>
        <div>검색버튼</div>
      </div>
    </div>
  )
}

export default AnimalFilter
