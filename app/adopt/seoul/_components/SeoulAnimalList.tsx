'use client'

import Pagination from '@/components/pagination/pagination'
import OneSeoulAnimal from './OneSeoulAnimal'
import { getMergedData } from '@/app/api/adopt/seoul/seoul.api'
import { useEffect, useState } from 'react'
import { atom, useAtom } from 'jotai'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'

const dataAtom = atom<mergedItem[] | null>(null)
const pageAtom = atom<number>(1)

const SeoulAnimalList: React.FC = () => {
  const [data, setData] = useAtom(dataAtom)
  const [page, setPage] = useAtom(pageAtom)

  useEffect(() => {
    getMergedData(28, 250).then((res) => {
      if (res) {
        const response: mergedItem[] = res
        setData(response)
      }
    })
  }, [])

  const handlePage = (n: number) => {
    setPage(n)
  }

  // const animalWithPhoto = await getMergedData(28, 250)

  // //pagination
  // const [page, setPage] = useState(1)
  // let pageRange = [0, 8]
  // if (page) pageRange = [8 * (page - 1), 8 * page]

  // const [category] = useAtom(categoryAtom)
  // const filteredList = animalWithPhoto.filter((animal) => {
  //   if (category) return animal.list.SPCS === category
  //   return animal
  // })

  if (data)
    return (
      <>
        {/* <AnimalFilter isSeoul={true} /> */}
        <div className="w-content m-auto mt-[50px]">
          <div>
            <div className="font-bold mb-10 text-[24px]">
              동물 공고 <span className="text-brown-200">{data.length}</span>건
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-8">
              {data.slice(8 * (page - 1), 8 * page).map((animal) => (
                <OneSeoulAnimal
                  animal={animal.list}
                  images={!!animal.photo && animal.photo}
                  key={Math.random() * 1000}
                />
              ))}
            </div>
          </div>
          <Pagination
            total={data.length}
            currentPage={1}
            limit={8}
            handlePage={handlePage}
          />
        </div>
      </>
    )
}

export default SeoulAnimalList
