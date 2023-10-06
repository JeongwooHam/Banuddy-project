import Title from '../_components/Title'
import DataTable from './_components/DataTable'

export default function volunteerList() {
  return (
    <>
      <Title text="봉사신청내역" />
      <div>00 를 통해 봉사활동 신청을 한 내역을 확인할 수 있어요.</div>
      <DataTable />
    </>
  )
}
