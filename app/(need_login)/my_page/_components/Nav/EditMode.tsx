import CustomInput from '@/components/input/input'
import { useAtom } from 'jotai'
import { editAtom } from './UserInfo'

const EditMode: React.FC = () => {
  const [, setIsEditMode] = useAtom(editAtom)

  return (
    <div className="m-center">
      <CustomInput
        placeholder="닉네임"
        type="text"
        style="m-center h-[25px] mb-[10px] border-b-[1px] w-[80%] "
      />
      <CustomInput
        placeholder="소개글"
        type="text"
        style="m-center h-[25px] mb-[10px] border-b-[1px] w-[80%] "
      />
      <div>
        <button
          className="bg-black text-white w-[100px] h-[25px] text-[12px]"
          onClick={() => setIsEditMode(false)}
        >
          저장
        </button>
      </div>
    </div>
  )
}

export default EditMode
