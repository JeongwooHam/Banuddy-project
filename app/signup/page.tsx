'use client'

import { useRouter } from 'next/navigation'
import { SyntheticEvent } from 'react'

export default function SignUp() {
  const router = useRouter()

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }

    const { email, password } = target

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title: email.value, body: password.value }),
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + 'users', options)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        router.refresh()
        router.push(`/login`)
      })
  }

  return (
    <>
      <h1>회원가입 페이지입니다</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="email" name="email" placeholder="이메일" />
        </p>
        <p>
          <input type="password" name="password" placeholder="비밀번호" />
        </p>
        <p>
          <input type="submit" value="회원가입" />
        </p>
      </form>
    </>
  )
}
