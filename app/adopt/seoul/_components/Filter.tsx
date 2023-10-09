'use client'

import CommonSelect from '@/components/select/select'
import CustomInput from '@/components/input/input'
import { Button } from '@/components/button/Button'
import { adoptState, animalSex, fosterState } from '@/constants/filterValue'
import { useState } from 'react'
import CategorySelect, { categoryAtom } from './select/category'
import { atom, useAtom } from 'jotai'

export const filterAtom = atom({
  category: '',
  sex: '',
  adoptState: '',
  fosterState: '',
  name: '',
})

const SeoulAnimalFilter: React.FC = () => {
  const [filterValue, setFilterValue] = useAtom(filterAtom)

  const [selectVal, setSelectVal] = useState({})
  console.log('select', selectVal)
  const [category, setCategory] = useAtom(categoryAtom)

  const handleSearch = () => {
    setCategory(category)
  }

  return (
    <div className="bg-brown-100 w-content m-auto mt-[100px] rounded-[3px] p-7">
      <div className="flex justify-between w-[800px]">
        <div>
          <div className="text-base font-bold mb-2">동물구분</div>
          <CategorySelect />
        </div>
        <div>
          <div className="text-base font-bold mb-2">성별</div>
          <CommonSelect itemArray={animalSex} setSelectVal={setSelectVal} />
        </div>
        <div>
          <div className="text-base font-bold mb-2">입양상태</div>
          <CommonSelect itemArray={adoptState} setSelectVal={setSelectVal} />
        </div>
        <div>
          <div className="text-base font-bold mb-2">임시보호상태</div>
          <CommonSelect itemArray={fosterState} setSelectVal={setSelectVal} />
        </div>
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

export default SeoulAnimalFilter
