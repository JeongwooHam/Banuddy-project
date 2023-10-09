'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SampleImage from '/public/images/sampleImage.png'
import Image from 'next/image'

function ImageSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: "custom-dots" > 시간 남으면 슬라이드 커스텀
  }

  return (
    <div className="w-[350px] m-center mt-[60px]">
      <Slider {...settings}>
        <Image src={SampleImage} alt="sample" />
        <Image src={SampleImage} alt="sample" />
        <Image src={SampleImage} alt="sample" />
        <Image src={SampleImage} alt="sample" />
      </Slider>
    </div>
  )
}

export default ImageSlide
