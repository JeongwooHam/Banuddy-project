'use client'

import ScrollButton from './_component/ScrollToMain'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Landing() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/images/intro1.png"
            alt="Landing Page Image"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
            <h1
              className=" text-white font-bold"
              style={{ fontSize: '95px', marginLeft: '43%', marginTop: '0%' }}
            >
              will you
            </h1>
            <h1
              className="text-white text-xl font-bold"
              style={{ fontSize: '90px', marginLeft: '55%' }}
            >
              be my
            </h1>
            <h1
              className="text-white text-xl font-bold"
              style={{
                fontSize: '97px',
                marginLeft: '40%',
                marginBottom: '50px',
              }}
            >
              <br />
              bestfriend?
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 mb-2">
          <Link href="/login">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <ScrollButton />
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  )
}
