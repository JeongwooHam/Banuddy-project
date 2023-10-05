import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
      <div className="w-full">
        <Slider {...sliderSettings}>
          <div>
            <img src="/images/banner.png" alt="banuddy introduction" />
          </div>
          <div>
            <img src="/images/banner.png" alt="banuddy introduction" />
          </div>
          <div>
            <img src="/images/banner.png" alt="banuddy introduction" />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default BannerAd
