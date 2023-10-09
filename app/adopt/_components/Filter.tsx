'use client'

import CommonSelect from '@/components/select/select'
import CustomInput from '@/components/input/input'
import { Button } from '@/components/button/Button'
import { filterForNational, filterForSeoul } from '@/constants/filterValue'
import { useState } from 'react'

type adoptProp = { isSeoul: boolean }

const AnimalFilter: React.FC<adoptProp> = ({ isSeoul }) => {
  const handleSearch = () => {}
  const [selectVal, setSelectVal] = useState({})

  return (
    <div className="bg-brown-100 w-content m-auto mt-[100px] rounded-[3px] p-7">
      <div className="flex justify-between w-[800px]">
        {(isSeoul ? filterForSeoul : filterForNational).map(
          ({ title, itemArray }) => (
            <div key={Math.random() * 1000}>
              <div className="text-base font-bold mb-2">{title}</div>
              <CommonSelect itemArray={itemArray} setSelectVal={setSelectVal} />
            </div>
          ),
        )}
      </div>
      <div>
        <div className="text-base font-bold mt-5 mb-2">이름</div>
        <div className="flex justify-between">
          <CustomInput
            placeholder="이름을 모를 경우 비워둘 수 있습니다."
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

export default AnimalFilter
