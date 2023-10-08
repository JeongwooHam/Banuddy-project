import CustomInput from '@/components/input/input'
import Title from '../../_components/Title'

const ModifyPassword = () => {
  return (
    <div>
      <Title text="비밀번호 변경" />
      <div className="w-[700px] h-[185px] pt-[40px] pl-[40px] rounded-[10px] bg-gray-100">
        <div className="flex mb-[10px]">
          <div className="text-[18px] font-bold w-[130px] pt-[10px]">
            변경비밀번호
          </div>
          <CustomInput
            placeholder="변경할 비밀번호를 입력해주세요"
            type="password"
            style="w-[384px] h-[50px] rounded-[30px] border-[2px] border-gray-200"
          />
        </div>
        <div className="flex">
          <div className="text-[18px] font-bold w-[130px] pt-[10px]">
            비밀번호 확인
          </div>
          <CustomInput
            placeholder="변경할 비밀번호를 확인해주세요"
            type="password"
            style="w-[384px] h-[50px] rounded-[30px] border-[2px] border-gray-200"
          />
        </div>
      </div>
      <div className="mt-[5px] ml-[585px]">
        <button className="bg-gray-300 text-white font-[700] w-[115px] h-[47px]">
          저장하기
        </button>
      </div>
    </div>
  )
}

export default ModifyPassword
