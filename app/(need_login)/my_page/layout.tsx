import Image from 'next/image'
import NavBar from './_components/Nav'
import background from '/public/images/myPageBackground.png'

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode
  asideContent: React.ReactNode
}) {
  return (
    <div className="relative min-h-[900px]">
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex z-100 absolute h-[90%] mt-[40px] bg-white rounded left-[22%] pt-[50px]">
        <div className="z-1 h-full">
          <NavBar />
        </div>
        <div className="z-100  w-[860px]">{children}</div>
      </div>
    </div>
  )
}
