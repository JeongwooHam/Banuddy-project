'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import { Seoul } from '@/store'

function ImageSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [targetAnimal] = useAtom(Seoul.animalAtom)

  if (targetAnimal) {
    const { photo } = targetAnimal

    return (
      <div className="w-[350px] m-center mt-[60px]">
        <Slider {...settings}>
          {photo?.map((image) => (
            <Image
              src={`https://${image.PHOTO_URL}`}
              alt="sample"
              width={300}
              height={150}
              key={image.PHOTO_NO}
            />
          ))}
        </Slider>
      </div>
    )
  }
}

export default ImageSlide
