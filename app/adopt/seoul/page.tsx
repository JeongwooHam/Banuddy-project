'use client'

import Title from '../_components/Title'

import SeoulAnimalList from './_components/SeoulAnimalList'

const AdoptSeoul: React.FC = () => {
  return (
    <>
      <div className="bg-primary-100 pb-[60px]">
        <Title isSeoul={true} />
        <SeoulAnimalList />
      </div>
    </>
  )
}

export default AdoptSeoul
