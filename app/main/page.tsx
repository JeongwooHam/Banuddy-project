'use client'

import React from 'react'
import BannerAd from './_components/Banner'
import DogCarousel from './_components/DogCarousel'
import CatCarousel from './_components/CatCarousel'
import './style.css'
import OneAnimal from '../adopt/_components/OneAnimal'

const Main: React.FC = () => {
  const animalComponents = Array(8).fill(<OneAnimal />)

  return (
    <>
      <div className="container">
        <nav className="bg-gray-200 p-4">
          <div className="flex justify-between items-center">nav bar</div>
        </nav>

        <div className="w-full">
          <BannerAd />
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full h-10 bg-gray ">
            <div className="dogCarousel">
              <DogCarousel content={animalComponents} />
            </div>
            <CatCarousel content={animalComponents} />
          </div>
        </div>

        {/* Button Section */}
        <div className="flex w-1/2 text-center justify-center items-center mt-8">
          <div className="flex flex-col ">
            <h1>반려동물 입양</h1>
            <p>
              많은 유기동물들이 가족과 친구들을 기다리고 있습니다. 아이들에게
              따뜻한 보금자리가 되어주세요!
            </p>
            <button className="submit-btn">입양 동물 소개</button>
            <button className="submit-btn">전국 입양 공고</button>
          </div>
          <div className="flex flex-col ">
            <h1>보호소 봉사</h1>
            <p>
              열악한 환경에 놓인 유기 동물들에게 도움의 손길이 절실합니다.
              보호소 봉사 활동에 참여하여 사랑과 온기를 전해주세요!
            </p>
            <button className="submit-btn">보호소 확인하기</button>
            <button className="submit-btn">봉사신청서 작성</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
