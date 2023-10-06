import NavTabs from './Tab'
import UserInfo from './UserInfo'

const NavBar: React.FC = () => {
  return (
    <>
      <div className="flex">
        <UserInfo />
        <NavTabs />
      </div>
    </>
  )
}

export default NavBar
