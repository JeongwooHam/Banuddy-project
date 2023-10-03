import React from 'react'
import Styles from './styles'


export interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
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

export default Button
