import CustomInput from '@/components/input/input'
import { Button } from '@/components/button/Button'
import CategorySelect from './select/category'
import { useAtomValue, useSetAtom } from 'jotai'
import { Seoul } from '@/store'

const SeoulAnimalFilter: React.FC = () => {
  const setFilterValue = useSetAtom(Seoul.filterAtom)

  const cate = useAtomValue(Seoul.categoryAtom)

  const handleFilter = () => {
    console.log('cate', cate)
    setFilterValue({
      cate: cate,
      sex: '',
      adopt: '',
      foster: '',
      name: '',
      isSubmit: true,
    })
  }

  return (
    <div className="bg-brown-100 w-content m-auto mt-[100px] rounded-[3px] p-7">
      <div className="flex justify-between w-[800px]">
        <div>
          <div className="text-base font-bold mb-2">동물구분</div>
          <CategorySelect />
        </div>
        {/* <div>
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
        </div> */}
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
            onClick={handleFilter}
            buttonStyle="w-[2px] h-[40px] bg-brown-200 text-white ml-[10px] text-md leading-[10px] border-0"
          />
        </div>
      </div>
    </div>
  )
}

export default SeoulAnimalFilter
