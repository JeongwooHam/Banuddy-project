import Image from 'next/image'
import sampleImage from '/public/images/sampleImage.png'

const ProfileImage: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <Image
            src={sampleImage}
            alt="sample"
            className="w-[125px] h-[125px] rounded-full m-center mb-[20px]"
          />
        </div>
        {/* 클릭 시 수정 로직 */}
      </div>
    </>
  )
}

export default ProfileImage
