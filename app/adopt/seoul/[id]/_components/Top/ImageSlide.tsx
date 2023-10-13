'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { animalAtom } from '../../../_components/OneSeoulAnimal'
import { mergedItem } from '../../../_components/SeoulAnimalList'

function ImageSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [targetAnimal] = useAtom(animalAtom)

  if (targetAnimal) {
    const target = targetAnimal as mergedItem
    const { photo } = target

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
