'use client'

import React from 'react'
import './style.css'
import DogCarousel from './_components/DogCarousel'
import CatCarousel from './_components/CatCarousel'
import BannerAd from './_components/Banner'

const Main: React.FC = () => {
  const animalComponents = Array(8).fill(<img src="/images/sampleImage.png" />)

  return (
    <div className="w-content m-auto">
      <BannerAd />
      <div className="w-[100%] min-w-[700px] pt-[50px] pb-[50px]">
        <DogCarousel content={animalComponents} />
        <CatCarousel content={animalComponents} />
      </div>
      <div className="flex flex-grow ">
        <div className="p-4">
          <div className="adoptBtnSection overflow-hidden	">
            <p className="title">반려동물 입양</p>
            <div className="flex ">
              <p className="max-w-[50%]">
                많은 유기동물들이 가족과 친구들을 기다리고 있습니다. 아이들에게
                따뜻한 보금자리가 되어주세요!
              </p>
              <div className="flex flex-col w-full">
                <button className="styled-btn">입양 동물 소개</button>
                <button className="styled-btn">전국 입양 공고</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <div className="shelterBtnSection overflow-hidden">
            <p className="title">보호소봉사</p>
            <div className=" flex">
              <p className="max-w-[50%]">
                열악한 환경에 놓인 유기 동물들에게 도움의 손길이 절실합니다.
                보호소 봉사 활동에 참여하여 사랑과 온기를 전해주세요!
              </p>
              <div className="flex flex-col w-full">
                <button className="styled-btn">보호소 확인하기</button>
                <button className="styled-btn">봉사신청서 작성</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
