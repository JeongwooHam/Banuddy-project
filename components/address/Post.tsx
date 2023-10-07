import React from 'react'
import DaumPostcode from 'react-daum-postcode'

const Post: React.FC<{
  address: string
  setAddress: React.Dispatch<React.SetStateAction<string>>
  setPopup: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ address, setAddress, setPopup }) => {
  const complete = (data: any) => {
    let fullAddress = data.address

    if (data.addressType === 'R') {
      fullAddress = `${data.sido} ${data.sigungu} ${data.bname}`
    }

    setAddress(fullAddress)
    setPopup(false)
  }

  const postCodeStyle = {
    width: '100%',
    padding: '7px',
  }

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-50">
      <div className="w-[550px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg pt-10">
        <button
          className="bg-none cursor-pointer border-none absolute top-1 right-5 text-md hover:font-bold"
          onClick={() => setPopup(false)}
        >
          X
        </button>
        <DaumPostcode style={postCodeStyle} autoClose onComplete={complete} />
      </div>
    </div>
  )
}

export default Post
