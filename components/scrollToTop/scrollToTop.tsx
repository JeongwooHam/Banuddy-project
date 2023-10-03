import React from 'react'
import Styles from './styles'

export interface ScrollProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const ScrollToTop: React.FC<ScrollProps> = ({ label, onClick, disabled }) => {
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

export default ScrollToTop
