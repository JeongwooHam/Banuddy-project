import React from 'react'
import Styles from './styles'

export interface InputProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`${Styles.fontSize} ${Styles.bg}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Input
