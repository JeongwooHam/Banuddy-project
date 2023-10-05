'use client'

import { useRouter } from 'next/navigation'
import { SyntheticEvent } from 'react'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './style.css'

const schema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요'),
  email: yup
    .string()
    .email('유효한 이메일을 입력해주세요')
    .required('이메일을 입력해주세요'),
  password: yup.string().required('비밀번호를 입력해주세요'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], '비밀번호가 일치하지 않습니다')
    .required('비밀번호 확인을 입력해주세요'),
  phoneNumber: yup.string().required('휴대폰번호를 입력해주세요'),
})

interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
}

export default function SignUp() {
  const [iconCounts, setIconCounts] = useState([0, 0, 0, 0, 0])

  const handleInputChange = (index: any, value: any) => {
    const newIconCounts = [...iconCounts]
    newIconCounts[index] = value.length
    setIconCounts(newIconCounts)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form submitted:', data)
  }

  return (
    <div className="container">
      <div className="py-6">
        <img src="/assets/Banuddy.png" alt="Logo" className=" h-10 " />
      </div>
      <div className="flex justify-center space-x-4">
        {iconCounts.map((count, index) => (
          <div
            key={index}
            className={`w-16 h-16 bg-gray-200 square-full ${
              count > 0 ? 'bg-blue-500' : ''
            }`}
          ></div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center w-1/2 min-w-[500px] text-center mt-8 border border-gray-200 rounded-2xl py-5">
        <h1 className="text-2xl font-bold mb-4 pb-4	">회원가입 페이지입니다</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-1/2 "
        >
          <input
            type="text"
            placeholder="이름"
            {...register('name')}
            onChange={(e) => handleInputChange(0, e.target.value)}
            className="input-default"
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            type="email"
            placeholder="이메일"
            {...register('email')}
            onChange={(e) => handleInputChange(1, e.target.value)}
            className="input-default"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="password"
            placeholder="비밀번호"
            {...register('password')}
            onChange={(e) => handleInputChange(2, e.target.value)}
            className="input-default"
          />
          {errors.password && <span>{errors.password.message}</span>}
          <input
            type="password"
            placeholder="비밀번호 확인"
            {...register('confirmPassword')}
            onChange={(e) => handleInputChange(3, e.target.value)}
            className="input-default"
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <input
            type="text"
            placeholder="휴대폰번호"
            {...register('phoneNumber')}
            onChange={(e) => handleInputChange(4, e.target.value)}
            className="input-default"
          />
          {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
          <button type="submit" className="submit-btn">
            가입하기
          </button>
          <button className="text-xs font-bold"> 로그인 하러가기</button>
        </form>
      </div>
    </div>
  )
}

// export default function SignUp() {
//   const router = useRouter()

//   const handleSubmit = (e: SyntheticEvent) => {
//     e.preventDefault()
//     const target = e.target as typeof e.target & {
//       email: { value: string }
//       password: { value: string }
//     }

//     const { email, password } = target

//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({ title: email.value, body: password.value }),
//     }

//     fetch(process.env.NEXT_PUBLIC_API_URL + 'users', options)
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result)
//         router.refresh()
//         router.push(`/login`)
//       })
//   }

//   return (
//     <>
//       <h1>회원가입 페이지입니다</h1>
//       <form onSubmit={handleSubmit}>
//         <p>
//           <input type="email" name="email" placeholder="이메일" />
//         </p>
//         <p>
//           <input type="password" name="password" placeholder="비밀번호" />
//         </p>
//         <p>
//           <input type="submit" value="회원가입" />
//         </p>
//       </form>
//     </>
//   )
// }
