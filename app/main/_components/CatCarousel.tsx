import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'

interface CatCarouselProps {
  content: React.ReactNode[]
}

const CatCarousel: React.FC<CatCarouselProps> = ({ content }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3500,

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
        backgroundImage: "url('/images/catSlide.png')",
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <div className="w-[70%]">
        <Slider {...sliderSettings}>
          {content.map((slideContent: any, index: number | string) => (
            <div key={index}>
              <div className="max-h-[300px] rounded pt-[25px] border-slate-200">
                {slideContent}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CatCarousel
