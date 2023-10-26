'use client'

import React, { useEffect, useState } from 'react'
import './style.css'
import DogCarousel from './_components/DogCarousel'
import CatCarousel from './_components/CatCarousel'
import BannerAd from './_components/Banner'
import Link from 'next/link'
import { getMergedData } from '../api/adopt/seoul/seoul.api'
import { mergedItem } from '../api/adopt/seoul/seoul.type'

const Main: React.FC = () => {
  const [data, setData] = useState<mergedItem[] | null>(null)
  const animalComponents = Array(8).fill(<img src="/images/sampleImage.png" />)

  useEffect(() => {
    const prop = { listEnd: 28, photoEnd: 250 }
    getMergedData(prop).then((res) => {
      if (res) {
        const response: mergedItem[] = res
        setData(response)
      }
    })
  }, [])

  const dogData = data?.filter((animal) => animal.list.SPCS === 'DOG') || []
  const catData = data?.filter((animal) => animal.list.SPCS === 'CAT') || []

  return (
    <div className="w-content m-auto flex flex-col justify-center">
      <BannerAd />
      <div className="w-[100%] min-w-[700px] pt-[50px] pb-[50px]">
        <DogCarousel content={dogData.slice(0, 8)} />
        <div className="pt-[20px]">
          <CatCarousel content={catData.slice(0, 8)} />
        </div>
      </div>
      <div className="flex flex-[1_1_50%] m-auto ">
        <div className="flex flex-1 p-4 justify-center">
          <div className="adoptBtnSection overflow-hidden	">
            <p className="title">반려동물 입양</p>
            <div className="flex ">
              <p className="max-w-[60%] mr-[20px] font-sm">
                많은 유기동물들이 가족과 <br /> 친구들을 기다리고 있습니다.
                아이들에게 따뜻한 보금자리가 되어주세요!
              </p>
              <div className="flex flex-col w-full">
                <Link href="/adopt/seoul">
                  <button className="styled-btn">입양 동물 소개</button>
                </Link>
                <Link href="/adopt/national">
                  <button className="styled-btn">전국 입양 공고</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 p-4 justify-center">
          <div className="shelterBtnSection overflow-hidden">
            <p className="title">보호소봉사</p>
            <div className="flex">
              <p className="max-w-[60%] mr-[20px] font-sm">
                열악한 환경에 놓인 유기동물들 <br />
                에게 도움의 손길이 절실합니다. 보호소 봉사 활동에 참여하여
                사랑과 온기를 전해주세요!
              </p>
              <div className="flex flex-col w-full">
                <Link href="/shelter">
                  <button className="styled-btn">보호소 확인하기</button>
                </Link>
                <Link href="/application/volunteer">
                  <button className="styled-btn">봉사신청서 작성</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
