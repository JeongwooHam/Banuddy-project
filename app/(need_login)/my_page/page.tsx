import MyPageLayout from './layout'

export default function myPage() {
  return (
    <MyPageLayout asideContent={<h2>Aside Content</h2>}>
      <h1>myPage 페이지입니다</h1>
    </MyPageLayout>
  )
}
