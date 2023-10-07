import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { url } from 'inspector'

interface DogCarouselProps {
  content: React.ReactNode[]
}

const DogCarousel: React.FC<DogCarouselProps> = ({ content }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,

    nextArrow: (
      <div>
        <Image src="/icons/arrow-top-right.svg" alt="arrow-right" />
      </div>
    ),
    prevArrow: (
      <div>
        <Image src="/icons/arrow-left.svg" alt="arrow-left" />
      </div>
    ),
  }

  return (
    <div
      className=" w-full"
      style={{
        backgroundImage: "url('/images/dogSlide.png')",
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <div className="w-[70%]">
        <Slider {...sliderSettings}>
          {content.map((slideContent: any, index: number | string) => (
            <div key={index}>
              <div className="h-auto rounded pt-[25px] border-slate-200">
                {slideContent}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default DogCarousel
