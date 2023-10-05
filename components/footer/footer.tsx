import Image from 'next/image'
import React from 'react'
import textHighlight from '/public/images/highlightFooter.png'

const Footer: React.FC = () => {
  return (
    <div>
      <div className="absolute left-[48.8vw] mt-[25px] ">
        <Image src={textHighlight} alt="highlight" />
      </div>
      <div className="text-center">
        <span className="font-intro text-[80px]">"</span>
        <span className="text-[40px] font-bold">사지 말고 입양하세요</span>
        <span className="font-intro text-[80px]">"</span>
      </div>
      <div className="text-center mb-[30px]">
        이 페이지는 포트폴리오를 위해 제작된 페이지로 실제 입양 및 봉사 신청은
        불가능합니다. <br />
        하지만 페이지에서 찾아보실 수 있는 모든 친구들은 실제로 그곳에서
        여러분의 입양과 도움의 손길을 기다리고 있습니다. <br />
        저희 페이지를 통해 눈에 밟히는 아이를 만나셨다면, 오늘 보호소에 한번
        연락해보시는 것은 어떨까요?
      </div>
    </div>
  )
}

export default Footer
