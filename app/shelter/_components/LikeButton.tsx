'use client'

import React from 'react'
import FillStar from '/public/icons/star-fill.svg'
import EmptyStar from '/public/icons/star-empty.svg'
import Image from 'next/image'

const LikeButton: React.FC = () => {
  const [isLiked, setIsLiked] = React.useState(false)

  return (
    <>
      <button
        className="w-[21px] h-[21px] border-none"
        onClick={() => setIsLiked((prev) => !prev)}
      >
        <Image
          src={isLiked ? FillStar : EmptyStar}
          alt="paw"
          className="m-center"
        />
      </button>
    </>
  )
}

export default LikeButton
