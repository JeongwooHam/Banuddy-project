'use client'

import { Database } from '@/types/supabase'
import { yupResolver } from '@hookform/resolvers/yup'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
  phoneNumber: yup.string().required('휴대폰 번호를 입력하세요'),
  userName: yup.string().required('닉네임을 입력하세요'),
})

export default function CompleteSignUp() {
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const phoneNumber = searchParams.get('phoneNumber')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: { userName: string; phoneNumber: string }) => {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()

      if (user) {
        // Supabase에 회원 정보 추가
        const { error } = await supabase
          .from('profiles')
          .update({
            user_name: name,
            user_phone_number: phoneNumber,
          })
          .eq('id', user?.id)
      }
      if (error) {
        throw error
      }

      router.push('/')
    } catch (error) {
      console.error('회원 정보 추가 중 오류 발생:', error)
    }
  }

  // useEffect(() => {
  //   const completeSignup = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser()
  //     if (!user) return

  //     const { error } = await supabase
  //       .from('profiles')
  //       .update({
  //         user_name: name,
  //         user_phone_number: phoneNumber,
  //       })
  //       .eq('id', user?.id)
  //   }
  //   completeSignup().then((res) => {
  //     router.push('/')
  //   })
  // }, [])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="phoneNumber">휴대폰 번호:</label>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
        </div>
        <div>
          <label htmlFor="userName">닉네임:</label>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => <input type="text" {...field} />}
          />
          {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <button type="submit">회원가입 완료</button>
      </form>
    </div>
  )
}
