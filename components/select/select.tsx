import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export interface SelectProps {
  selectValue: string[]
}

const CommonSelect: React.FC<SelectProps> = ({ selectValue }) => {
  if (selectValue)
    return (
      <Select>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="전체" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {selectValue.map((val) => (
            <SelectItem value={val}>{val}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
}

export default CommonSelect
