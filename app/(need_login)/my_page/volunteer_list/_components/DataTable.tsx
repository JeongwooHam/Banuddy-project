import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const DataTable = () => {
  const mockDataArray = [
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
    {
      id: 10,
      applyDate: '2023.09.01',
      shelter: '서울봉사센터',
      volunteerDate: '2023.10.07',
      people: 3,
      state: '신청중',
    },
  ]

  return (
    <>
      <Table className="w-[800px] mt-[30px]">
        <TableHeader className="bg-gray-200 border-t-[1px] border-gray-300">
          <TableRow>
            <TableHead className="w-[100px]">번호</TableHead>
            <TableHead>신청일자</TableHead>
            <TableHead>기관명</TableHead>
            <TableHead>봉사희망일자</TableHead>
            <TableHead>인원수</TableHead>
            <TableHead>상태</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockDataArray.map(
            ({ id, applyDate, shelter, volunteerDate, people, state }) => (
              <TableRow>
                <TableCell>{id}</TableCell>
                <TableCell>{applyDate}</TableCell>
                <TableCell>{shelter}</TableCell>
                <TableCell>{volunteerDate}</TableCell>
                <TableCell>{people}명</TableCell>
                <TableCell>{state}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default DataTable
