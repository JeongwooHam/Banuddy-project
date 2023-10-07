'use client'

import React from 'react'
import BannerAd from './_components/Banner'
import DogCarousel from './_components/DogCarousel'
import CatCarousel from './_components/CatCarousel'
import './style.css'
import NavBar from '@/components/navBar/NavBar'

const Main: React.FC = () => {
  const animalComponents = Array(8).fill(<img src="/images/sampleImage.png" />)

  return (
    <div className="min-h-screen containerMain">
      <NavBar />
      <BannerAd />
      <div className="w-[100%] min-w-[700px]">
        <DogCarousel content={animalComponents} />
        <CatCarousel content={animalComponents} />
      </div>
      <div className="w-[70%]  min-w-[700px] flex flex-grow ">
        <div className="flex-1 p-4">
          <div className="adoptBtnSection">
            반려동물 입양
            <p>
              많은 유기동물들이 가족과 친구들을 기다리고 있습니다. 아이들에게
              따뜻한 보금자리가 되어주세요!
            </p>
            <div className="mb-4">
              <button className="bg-green-500 text-white p-2 mr-2">
                입양 동물 소개
              </button>
              <button className="bg-green-500 text-white p-2">
                전국 입양 공고
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="shelterBtnSection">
            보호소봉사
            <p>
              열악한 환경에 놓인 유기 동물들에게 도움의 손길이 절실합니다.
              보호소 봉사 활동에 참여하여 사랑과 온기를 전해주세요!
            </p>
            <div className="mb-4">
              <button className="bg-green-500 text-white p-2 mr-2">
                보호소 확인하기
              </button>
              <button className="bg-green-500 text-white p-2">
                봉사신청서 작성
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
