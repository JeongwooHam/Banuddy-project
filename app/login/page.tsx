import './form.css'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex-1 flex justify-center items-center">
          <img src="images/login.png" alt="Login Image" className="" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <Head>
            <title>Login Page</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className="flex flex-col items-center mb-4">
            <img src="/assets/Banuddy.png" alt="Logo" className=" h-10 " />
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              style={{ width: '250px', height: '40px' }}
              className="text-xs	border border-gray-200 rounded-3xl px-3 py-2 mb-2"
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="text-xs	border border-gray-200 rounded-3xl px-3 py-2 mb-4"
            />
            <button className="text-sm font-bold bg-orange-500 text-white rounded-3xl px-3 py-2">
              로그인하기
            </button>
            <button className="text-sm">회원가입 하러가기</button>
          </div>
        </div>
      </div>
    </>
  )
}
