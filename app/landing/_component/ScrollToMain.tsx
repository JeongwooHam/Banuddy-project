import React from 'react'
import { motion } from 'framer-motion'

const ScrollButton = () => {
  const scrollToMain = () => {
    const mainSection = document.getElementById('main-section')
    if (mainSection) {
      mainSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.button
      onClick={scrollToMain}
      className="text-white hover:underline"
    >
      YES!
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </motion.button>
  )
}

export default ScrollButton
