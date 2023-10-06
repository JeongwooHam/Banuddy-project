import NavTabs from './Tab'
import UserInfo from './UserInfo'

const NavBar: React.FC = () => {
  return (
    <nav className=" w-[233px] h-[80%] border-r-[1px] border-gray-100 text-center  ">
      <ul className="w-[200px] m-center">
        <UserInfo
          nickname={'김멍냥'}
          description={'고양이와 강아지를 사랑하는 집사예요.'}
        />
        <NavTabs />
      </ul>
    </nav>
  )
}

export default NavBar
