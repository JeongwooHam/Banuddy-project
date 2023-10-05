interface HeaderProps {
  isLogin: boolean
}

const Header: React.FC<HeaderProps> = ({ isLogin }) => {
  return (
    <>
      <div>LOGO</div>
      <div>
        <div>입앙</div>
        <div>봉사</div>
        <div>마이페이지</div>
        <div>{isLogin ? '로그아웃' : '로그인'}</div>
      </div>
    </>
  )
}

export default Header
