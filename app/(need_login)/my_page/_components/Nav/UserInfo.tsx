import ProfileImage from './ProfileImage'

const UserInfo: React.FC = () => {
  return (
    <>
      <li>
        <ProfileImage />
        <div>
          <div>닉네임</div>
          <div>수정버튼</div>
        </div>
        <div>소개글</div>
      </li>
    </>
  )
}

export default UserInfo
