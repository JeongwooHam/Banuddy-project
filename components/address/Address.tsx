import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Post from './Post'

interface FindAddressProps {
  setter: Dispatch<SetStateAction<string>>
}

const FindAddress: React.FC<FindAddressProps> = ({ setter }) => {
  const [address, setAddress] = useState<string>('')
  const [popup, setPopup] = useState(false)

  const handleComplete = (e: React.MouseEvent) => {
    e.preventDefault()
    setPopup(!popup)
  }

  useEffect(() => {
    setter(address)
  }, [address, setter])

  return (
    <>
      <div className="flex items-center address_search">
        <button
          className="w-20 h-10 border bg-white border-black text-sm font-bold rounded-lg cursor-pointer hover:bg-gray-200"
          onClick={handleComplete}
        >
          주소 찾기
        </button>
        {popup && (
          <Post address={address} setAddress={setAddress} setPopup={setPopup} />
        )}
      </div>
    </>
  )
}

export default FindAddress
