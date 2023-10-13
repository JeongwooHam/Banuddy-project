import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { animalcategory } from '@/constants/filterValue'
import { atom, useAtom } from 'jotai'

export const categoryAtom = atom('')

const CategorySelect = () => {
  const [, setCategory] = useAtom(categoryAtom)

  return (
    <Select onValueChange={(val) => setCategory(val)}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="선택" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {animalcategory.map((val: string) => (
          <SelectItem value={val} key={Math.random() * 1000}>
            {val}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default CategorySelect
