'use client'

import Title from '../../_components/Title'
import { useState } from 'react'
import EditInformation from './EditInformation'

const ModifyMyInformation = () => {
  const [isEditMode, setIsEditMode] = useState(false)

  return (
    <div className="mb-[30px]">
      <Title text="나의 정보 변경" />
      {isEditMode ? (
        <EditInformation setIsEditMode={setIsEditMode} />
      ) : (
        <>
          <div className="w-[700px] h-[185px] pt-[45px] pl-[40px] rounded-[10px] bg-gray-100">
            <div className="flex mb-[10px] pt-[10px]">
              <div className="text-[18px] font-bold w-[130px] ">이메일</div>
              <div>baowaomeow@test.test</div>
            </div>
            <div className="flex pt-[10px]">
              <div className="text-[18px] font-bold w-[130px]">휴대폰번호</div>
              <div> 010-7778-8889</div>
            </div>
          </div>
          <div className="mt-[5px] ml-[585px]">
            <button
              onClick={() => setIsEditMode(true)}
              className="bg-gray-300 text-white font-[700] w-[115px] h-[47px]"
            >
              수정하기
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ModifyMyInformation
