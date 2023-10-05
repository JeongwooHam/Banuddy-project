import ChangeMyInfo from './_components/ChangeMyInfo'
import ChangePassword from './_components/ChangePW'
import MyActivities from './_components/MyActivities'

const ModifyInfo: React.FC = () => {
  return (
    <>
      <div>
        <MyActivities />
        <ChangeMyInfo />
        <ChangePassword />
      </div>
    </>
  )
}

export default ModifyInfo
