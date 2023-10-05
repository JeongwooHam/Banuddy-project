import Image from 'next/image'
import TitleBackground from '/public/images/listHeader.png'

const Title: React.FC = () => {
  // 서울/전국 보이는 내용 다르게 하기
  return (
    <div className="relative">
      <Image
        src={TitleBackground}
        alt="animalListBackground"
        style={{
          margin: '0 auto',
          width: '100%',
          zIndex: '0',
        }}
      />
      <div className="text-center z-10 absolute top-10 w-full">
        <div className="text-[67px] font-script">입양 동물 소개</div>
        <div className="text-[20px]">
          서울동물복지지원센터에 입소해 있는 유기동물들입니다.
          <br />
          유기동물의 모습, 성별, 나이, 체중, 임시보호 가능여부 등을 보실 수
          있습니다.
        </div>
      </div>
    </div>
  )
}

export default Title
