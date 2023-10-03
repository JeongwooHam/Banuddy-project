import React from 'react'
import Styles from './styles'

export interface CardProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Card: React.FC<CardProps> = ({ label, onClick, disabled }) => {
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

export default Card
