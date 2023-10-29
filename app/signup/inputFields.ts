type InputFieldName =
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'phoneNumber'

type InputField = {
  name: InputFieldName
  type: string
  placeholder: string
  errorMessage: string
  index: number
}

export const inputFields: InputField[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: '이름',
    errorMessage: '이름을 입력해주세요',
    index: 0,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: '이메일',
    errorMessage: '유효한 이메일을 입력해주세요',
    index: 1,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
    errorMessage: '비밀번호를 입력해주세요',
    index: 2,
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: '비밀번호 확인',
    errorMessage: '비밀번호 확인을 입력해주세요',
    index: 3,
  },
  {
    name: 'phoneNumber',
    type: 'text',
    placeholder: '휴대폰번호',
    errorMessage: '휴대폰번호를 입력해주세요',
    index: 4,
  },
]
