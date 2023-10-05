const ShelterFilter: React.FC = () => {
  // 서울/전국 보이는 내용 다르게 하기
  return (
    <>
      <div>
        <div>
          <div>지역선택</div>
          <div>
            <div>서울특별시</div>
            <div>전체</div>
          </div>
        </div>
        <div>
          <div>기관유형</div>
          <div>전체</div>
        </div>
      </div>
      <div>
        <div>기관명</div>
        <div>
          <div>input</div>
          <div>button</div>
        </div>
      </div>
    </>
  )
}

export default ShelterFilter
