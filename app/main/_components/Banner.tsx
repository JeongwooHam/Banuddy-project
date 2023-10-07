import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import BannerAdImg from '/public/images/banner.png'

const BannerAd = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <>
      <div className="w-full bg-gray-100">
        <Slider {...sliderSettings}>
          <div>
            <Image src={BannerAdImg} alt="banuddy introduction" />
          </div>
          <div>
            <Image src={BannerAdImg} alt="banuddy introduction" />
          </div>
          <div>
            <Image src={BannerAdImg} alt="banuddy introduction" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default BannerAd
