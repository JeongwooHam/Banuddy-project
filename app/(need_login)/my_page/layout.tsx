import Image from 'next/image'
import NavBar from './_components/Nav'
import background from '/public/images/myPageBackground.png'
import NavBarDefault from '@/components/navBar/NavBar'
import Footer from '@/components/footer/footer'

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode
  asideContent: React.ReactNode
}) {
  return (
    <>
      <NavBarDefault />
      <div className="relative min-h-[1000px]">
        <div className="absolute inset-0">
          <Image
            src={background}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="flex z-100 absolute h-[90%] mt-[40px] bg-white rounded left-[22%] pt-[50px] ">
          <div className="z-1 h-full">
            <NavBar />
          </div>
          <div className="z-100 w-[860px] pl-[30px]">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
