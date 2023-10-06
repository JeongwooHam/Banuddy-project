import Image from 'next/image'
import NavBar from './_components/Nav'
import NavTabs from './_components/Nav/Tab'
import UserInfo from './_components/Nav/UserInfo'
import background from '/public/images/myPageBackground.png'

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode
  asideContent: React.ReactNode
}) {
  return (
    <div className="flex">
      <div className="flex-[8] p-4 rounded min-h-[300px]">{children}</div>
    </div>
  )
}
