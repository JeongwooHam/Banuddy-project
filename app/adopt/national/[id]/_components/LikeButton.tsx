'use client'

import React from 'react'
import FillPaw from '/public/icons/paw-fill.svg'
import EmptyPaw from '/public/icons/paw-empty.svg'
import Image from 'next/image'

export const LikeButton: React.FC = () => {
  const [isLiked, setIsLiked] = React.useState(false)

  return (
    <>
      <button
        className="w-[60px] h-[60px] border-solid border-[1px] border-primary-300 rounded-full"
        onClick={() => setIsLiked((prev) => !prev)}
      >
        <Image
          src={isLiked ? FillPaw : EmptyPaw}
          alt="paw"
          className="m-center"
        />
      </button>
    </>
  )
}
