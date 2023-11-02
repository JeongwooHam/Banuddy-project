'use client'

import Pagination from '@/components/pagination/pagination'
import OneSeoulAnimal from './OneSeoulAnimal'
import { getMergedData } from '@/app/api/adopt/seoul/seoul.api'
import { useEffect } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import { mergedItem } from '@/app/api/adopt/seoul/seoul.type'
import SeoulAnimalFilter from './Filter'
import { Seoul } from '@/store'

const SeoulAnimalList: React.FC = () => {
  const [data, setData] = useAtom(Seoul.dataAtom)
  const [page, setPage] = useAtom(Seoul.pageAtom)
  const filterValue = useAtomValue(Seoul.filterAtom)

  useEffect(() => {
    const prop = filterValue.isSubmit
      ? { listEnd: 28, photoEnd: 250, filter: filterValue }
      : { listEnd: 28, photoEnd: 250 }
    getMergedData(prop).then((res) => {
      if (res) {
        const response: mergedItem[] = res
        setData(response)
      }
    })
  }, [])

  const handlePage = (n: number) => {
    setPage(n)
  }

  // const [category] = useAtom(categoryAtom)
  // const filteredList = animalWithPhoto.filter((animal) => {
  //   if (category) return animal.list.SPCS === category
  //   return animal
  // })

  if (data)
    return (
      <>
        <SeoulAnimalFilter />
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
