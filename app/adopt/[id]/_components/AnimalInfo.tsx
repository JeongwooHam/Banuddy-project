import LikeButton from './LikeButton'

const AnimalInfo: React.FC = () => {
  return (
    <div>
      <div>
        <div>이름</div>
        <LikeButton />
      </div>
      <div>
        <div>전달된 정보</div>
      </div>
      <div>보호소에 입소한지 n일 되었어요.</div>
      <div>
        <button>입양하러 가기</button>
      </div>
    </div>
  )
}

export default AnimalInfo
