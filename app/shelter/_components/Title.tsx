import Image from 'next/image'
import TitleBackground from '/public/images/shelterHeader.png'

const Title: React.FC = () => {
  return (
    <>
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
          <div className="text-[67px] font-script">봉사센터 소개</div>

          <div>
            전국에 있는 반려동물 봉사센터를 확인하실 수 있습니다. <br />
            도움의 손길이 필요한 곳에 따뜻한 나눔을 전하는 봉사활동을 신청할 수
            있습니다 :)
          </div>
        </div>
      </div>
    </>
  )
}

export default Title
