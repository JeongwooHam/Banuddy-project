import NavTabs from './Tab'
import UserInfo from './UserInfo'

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <UserInfo />
        <NavTabs />
      </ul>
    </nav>
  )
}

export default NavBar
