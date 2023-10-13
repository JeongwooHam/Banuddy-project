import React from 'react'
import Styles from './styles'
import { Input } from '@/components/ui/input'

export interface InputProps {
  placeholder: string
  type: string
  style?: string
}

const CustomInput: React.FC<InputProps> = ({ placeholder, type, style }) => {
  return <Input type={type} className={style} placeholder={placeholder} />
}

export default CustomInput
