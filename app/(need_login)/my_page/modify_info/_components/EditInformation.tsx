import CustomInput from '@/components/input/input'

interface editProp {
  setIsEditMode: (value: React.SetStateAction<boolean>) => void
}

const EditInformation: React.FC<editProp> = ({ setIsEditMode }) => {
  return (
    <>
      <div className="w-[700px] h-[185px] pt-[40px] pl-[40px] rounded-[10px] bg-gray-100">
        <div className="flex mb-[10px]">
          <div className="text-[18px] font-bold w-[130px] pt-[10px]">
            이메일
          </div>
          <CustomInput
            placeholder="기존 이메일 주소"
            type="text"
            style="w-[384px] h-[50px] rounded-[30px] border-[2px] border-gray-200"
          />
        </div>
        <div className="flex">
          <div className="text-[18px] font-bold w-[130px] pt-[10px]">
            휴대폰번호
          </div>
          <CustomInput
            placeholder="기존 휴대폰 번호"
            type="tel"
            style="w-[384px] h-[50px] rounded-[30px] border-[2px] border-gray-200"
          />
        </div>
      </div>
      <div className="mt-[5px] ml-[585px]">
        <button
          onClick={() => setIsEditMode(false)}
          className="bg-gray-300 text-white  font-[700] w-[115px] h-[47px]"
        >
          저장하기
        </button>
      </div>
    </>
  )
}

export default EditInformation
