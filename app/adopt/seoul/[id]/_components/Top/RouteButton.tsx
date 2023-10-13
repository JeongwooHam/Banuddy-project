import { useRouter } from 'next/router'

const RouteButton = () => {
  const dynamicClassName = `w-[450px] p-[8px] mt-[27px] rounded-md bg-primary-300 text-[24px] border-none`

  const router = useRouter()
  return (
    <div>
      <button
        onClick={() => router.push('/application/adopt')}
        className={dynamicClassName}
      >
        입양하러 가기
      </button>
    </div>
  )
}

export default RouteButton
