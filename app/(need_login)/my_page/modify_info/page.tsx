import ModifyMyInformation from './_components/ModifyMyInformation'
import ModifyPassword from './_components/ModifyPassword'
import MyActivities from './_components/MyActivities'

export default function modifyInfo() {
  return (
    <div className="pl-[40px]">
      <MyActivities /> <ModifyMyInformation /> <ModifyPassword />
    </div>
  )
}
