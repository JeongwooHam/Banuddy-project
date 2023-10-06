'use client'

import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '/public/assets/Banuddy.png'
import { useRouter } from 'next/navigation'

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
  const [iconColors, setIconColors] = useState([
    'bg-gray-200',
    'bg-gray-200',
    'bg-gray-200',
    'bg-gray-200',
    'bg-gray-200',
  ])
  const [inputValues, setInputValues] = useState(['', '', '', '', ''])
  const router = useRouter()

  useEffect(() => {
    const newIconColors = inputValues.map((value) =>
      value.length > 0 ? 'bg-yellow-500' : 'bg-gray-200',
    )
    setIconColors(newIconColors)
  }, [inputValues])

  const handleInputChange = (index: any, value: any) => {
    const newInputValues = [...inputValues]
    newInputValues[index] = value
    setInputValues(newInputValues)
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
    if (
      !errors.name &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      !errors.phoneNumber
    ) {
      router.push('/main')
    }
  }

  return (
    <div className="container">
      <div className="py-6">
        <Image src={Banner} alt="Logo" className=" w-full h-10 " />
      </div>
      <div className="flex justify-center space-x-4">
        {iconColors.map((color, index) => (
          <div key={index} className={`w-16 h-16 square-full ${color}`}></div>
        ))}
      </div>

      <div className="form">
        <h1 className="text-4xl font-bold mb-4 pb-4	">회원가입</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-1/2 "
        >
          <input
            type="text"
            placeholder="이름"
            {...register('name')}
            onChange={(e) => handleInputChange(0, e.target.value)}
            className="input-signup icon-input"
          />
          {errors.name && (
            <span className="input-error-message">{errors.name.message}</span>
          )}
          <input
            type="email"
            placeholder="이메일"
            {...register('email')}
            onChange={(e) => handleInputChange(1, e.target.value)}
            className="input-signup icon-input"
          />
          {errors.email && (
            <span className="input-error-message">{errors.email.message}</span>
          )}
          <input
            type="password"
            placeholder="비밀번호"
            {...register('password')}
            onChange={(e) => handleInputChange(2, e.target.value)}
            className="input-signup icon-input"
          />
          {errors.password && (
            <span className="input-error-message">
              {errors.password.message}
            </span>
          )}
          <input
            type="password"
            placeholder="비밀번호 확인"
            {...register('confirmPassword')}
            onChange={(e) => handleInputChange(3, e.target.value)}
            className="input-signup icon-input"
          />
          {errors.confirmPassword && (
            <span className="input-error-message">
              {errors.confirmPassword.message}
            </span>
          )}
          <input
            type="text"
            placeholder="휴대폰번호"
            {...register('phoneNumber')}
            onChange={(e) => handleInputChange(4, e.target.value)}
            className="input-signup icon-input"
          />
          {errors.phoneNumber && (
            <span className="input-error-message">
              {errors.phoneNumber.message}
            </span>
          )}
          <button type="submit" className="submit-btn">
            가입하기
          </button>
          <Link href="/login" className="text-center">
            <button className="text-sm font-bold py-3">로그인 하러가기</button>
          </Link>
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
