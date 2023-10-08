'use client'

import { useState } from 'react'
import Link from 'next/link'
import './form.css'
import Head from 'next/head'

// 이미지 최적화를 위한 작업
import Image from 'next/image'
import Banner from '/public/assets/Banuddy.png'
import LoginImage from '/public/images/login.png'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    if (!email || !password) {
      setShowAlert(true)
      return
    }
    router.push('/main')
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="flex-1 flex justify-center items-center">
          <Image src={LoginImage} alt="Login Image" className="" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <Head>
            <title>Login Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="flex flex-col items-center mb-4 pb-3">
            <Image src={Banner} alt="Logo" className="w-full h-10 " />
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              style={{ width: '250px', height: '40px' }}
              className="input-default"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="input-default"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit-btn" onClick={handleLogin}>
              로그인
            </button>
            <button className="submit-btn">구글 로그인하기</button>

            <Link href="/signup" className="text-center">
              <button className="signup-btn">회원가입 하러가기</button>
            </Link>
          </div>
        </div>
      </div>
      {showAlert && (
        <div className="flex justify-center items-center text-center fixed rounded-2xl inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-red-500">이메일과 비밀번호를 입력해주세요.</p>
            <button
              onClick={() => setShowAlert(false)}
              className="border mt-4 bg-gray-500 text-black py-1 px-4 rounded"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  )
}
