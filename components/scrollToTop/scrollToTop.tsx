'use client'

import React from 'react'
import ScrollPaw from '/public/icons/scroll-paw.svg'
import Image from 'next/image'

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed right-[5%] bottom-[5%] z-10">
      <button
        className="w-[100px] h-[100px] font-bold text-[15px] border-[2px] border-black rounded-full outline-none cursor-pointer"
        onClick={scrollToTop}
      >
        <div>TOP</div>
        <div>
          <Image src={ScrollPaw} alt="paw" className="m-center" />
        </div>
      </button>
    </div>
  )
}

export default ScrollToTop
