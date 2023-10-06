import Link from 'next/link'
import './form.css'
import Head from 'next/head'

// 이미지 최적화를 위한 작업
import Image from 'next/image'
import Banner from '/public/assets/Banuddy.png'
import LoginImage from '/public/images/login.png'

export default function Login() {
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

          <div className="flex flex-col items-center mb-4">
            <Image src={Banner} alt="Logo" className="w-full h-10 " />
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              style={{ width: '250px', height: '40px' }}
              className="input-default"
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="input-default"
            />
            <button className="submit-btn">로그인하기</button>

            <Link href="/signup" className="text-center">
              <button className="text-sm font-bold py-3">
                회원가입 하러가기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
