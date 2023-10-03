import React from 'react'
import Styles from './styles'

export interface SelectProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Select: React.FC<SelectProps> = ({ label, onClick, disabled }) => {
  return (
    <select
      onClick={onClick}
      className={`${Styles.fontSize} ${Styles.bg}`}
      disabled={disabled}
    >
      {label}
    </select>
  )
}

export default Select
