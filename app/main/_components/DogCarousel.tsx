import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import OneSeoulAnimal from '@/app/adopt/seoul/_components/OneSeoulAnimal'

interface DogCarouselProps {
  content: mergedItem[]
}

const DogCarousel: React.FC<DogCarouselProps> = ({ content }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
  }

  return (
    <div
      className="w-full h-[300px] object-contain"
      style={{
        backgroundImage: "url('/images/dogSlide.png')",
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-[90%] pt-[40px] m-auto object-fill">
        <Slider {...sliderSettings}>
          {content.map((animalItem, index) => (
            <div key={index} className="h-[200px] overflow-hidden">
              <div className="transform scale-90">
                <OneSeoulAnimal
                  animal={animalItem.list}
                  images={!!animalItem.photo && animalItem.photo}
                  key={Math.random() * 1000}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default DogCarousel
