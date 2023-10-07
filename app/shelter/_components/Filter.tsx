'use client'

import CommonSelect from '@/components/select/select'
import CustomInput from '@/components/input/input'
import { Button } from '@/components/button/Button'
import { filterForShelter } from '@/constants/filterValue'

const ShelterFilter: React.FC = () => {
  const handleSearch = () => {}

  return (
    <div className="bg-brown-100 w-content m-auto mt-[100px] rounded-[3px] p-7">
      <div className="flex ">
        {filterForShelter.map(({ title, valueArray }) => (
          <div className="mr-[30px]">
            <div className="text-base font-bold mb-2">{title}</div>
            <CommonSelect selectValue={valueArray} />
          </div>
        ))}
      </div>
      <div>
        <div className="text-base font-bold mt-5 mb-2">기관명</div>
        <div className="flex justify-between">
          <CustomInput
            placeholder="기관명을 모를 경우 비워둘 수 있습니다."
            type="text"
            style="w-[799px]"
          />
          <Button
            label="검색"
            outlined={false}
            onClick={handleSearch}
            buttonStyle="w-[2px] h-[40px] bg-brown-200 text-white ml-[10px] text-md leading-[10px] border-0"
          />
        </div>
      </div>
    </div>
  )
}

export default ShelterFilter
