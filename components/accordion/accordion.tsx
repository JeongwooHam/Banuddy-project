import React from 'react'
import Styles from './styles'

export interface AccordionProps {
  label: string
  onClick: () => void
  disabled?: boolean
}

const Accordion: React.FC<AccordionProps> = ({ label, onClick, disabled }) => {
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

export default Accordion
