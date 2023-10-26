'use client'

import { Database } from '@/types/supabase'
import { yupResolver } from '@hookform/resolvers/yup'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import './style.css'
import * as yup from 'yup'

const schema = yup.object().shape({
  phoneNumber: yup.string().required('휴대폰 번호를 입력하세요'),
  name: yup.string().required('닉네임을 입력하세요'),
})

interface ApplicationFormData {
  name: string
  phoneNumber: string
}

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
  } = useForm<ApplicationFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: name || '',
      phoneNumber: phoneNumber || '',
    },
  })

  const onSubmit = async (data: { name: string; phoneNumber: string }) => {
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
            user_name: data.name,
            user_phone_number: data.phoneNumber,
          })
          .eq('id', user?.id)
      }
      if (error) {
        throw error
      }
      alert('성공')
      router.push('/main')
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
    <div className="container-signUp">
      <div className="form">
        <h1 className="text-4xl font-bold mb-4 pb-4">회원가입 완료</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-1/2"
        >
          <div>
            <label htmlFor="userName" className="hidden">
              닉네임:
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="닉네임"
                  className="input-signup icon-input mb-2 w-full"
                />
              )}
            />
            {errors.name && (
              <span className="input-error-message">{errors.name.message}</span>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="phoneNumber" className="hidden">
              휴대폰 번호:
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="휴대폰 번호"
                  className="input-signup icon-input mb-2 w-full"
                />
              )}
            />
            {errors.phoneNumber && (
              <span className="input-error-message">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>

          <button type="submit" className="submit-btn w-full mt-4">
            회원정보 입력 완료
          </button>
        </form>
      </div>
    </div>
  )
}
