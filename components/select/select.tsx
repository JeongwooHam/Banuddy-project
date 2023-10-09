import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface SelectProps {
  itemArray: string[]
  setSelectVal: (value: React.SetStateAction<boolean>) => void
}

const CommonSelect: React.FC<SelectProps> = ({ itemArray, setSelectVal }) => {
  if (itemArray)
    return (
      <Select>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="선택" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {itemArray.map((val: string) => (
            <SelectItem value={val} key={Math.random() * 1000}>
              {val}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
}

export default CommonSelect
