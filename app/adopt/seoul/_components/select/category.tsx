import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAtom } from 'jotai'
import { Seoul } from '@/store'

const CategorySelect = () => {
  const [, setCategory] = useAtom(Seoul.categoryAtom)

  return (
    <Select onValueChange={(val) => setCategory(val)}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="선택" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value={'전체'} key={Math.random() * 1000}>
          전체
        </SelectItem>
        <SelectItem value={'DOG'} key={Math.random() * 1000}>
          개
        </SelectItem>
        <SelectItem value={'CAT'} key={Math.random() * 1000}>
          고양이
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default CategorySelect
