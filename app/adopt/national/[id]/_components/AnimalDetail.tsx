import AnimalVideo from './AnimalVideo'

interface animalProps {
  type: 'cat' | 'dog' | 'others'
}

const AnimalDetail: React.FC<animalProps> = ({ type }) => {
  const colorMatch = {
    cat: 'primary',
    dog: 'brown',
    others: 'subColor',
  }

  const dynamicClassName = `border-t-4 border-b-4 border-primary-200 bg-primary-100`

  return (
    <div className={dynamicClassName}>
      <div className="w-content m-center ">
        <AnimalVideo />
        <div className="text-center m-[50px] leading-[3rem]">
          마포 불법 번식장에서 긴급구호를 통해 입소한 고양이 입니다. <br />{' '}
          열악한 환경에서 기본적인 관리도 받지 못하며 지냈던 고양이인 만큼{' '}
          <br /> 입양 후 쾌적하고 편안하게 지낼 수 있게 도와주며 끝까지 책임질
          수 있는 가정을 찾고 있습니다. <br />​ (중성화 수술 회복 후 23.09.29
          이후 입양 가능) <br />
          사자같은 황금빛 털과 큰 덩치에 애교가 많은 반전 매력의 뚜비 입니다.{' '}
          <br />​ 사람들에게 관심이 많고 말이 많은 편입니다. <br /> 졸졸
          따라다니며 야옹거리면서 애정을 요구합니다. <br /> 사람에게 안기면
          얼굴을 부비며 애정표현도 적극적으로 해줍니다. <br /> 스킨십도 좋아하고
          만져주면 아주 만족스러워 하고 좋아하지만 적정선을 넘으면 싫어하기도
          합니다. <br /> ​ 사람이 가지고 놀아주는 움직이는 장난감에 진심을 다해
          놀고 활발하고 에너지 넘치게 사냥놀이를 하는 것을 즐깁니다.
        </div>
      </div>
    </div>
  )
}

export default AnimalDetail
