import Footer from '../footer/footer'
import NavBar from '../navBar/NavBar'
import ScrollToTop from '../scrollToTop/scrollToTop'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-display">
      <NavBar />
      {children}
      <ScrollToTop />
      <Footer />
    </div>
  )
}
