import React from 'react'
import Styles from './styles'

export interface PaginationProps {
  label: string
  onClick: () => void
}

const Pagination: React.FC<PaginationProps> = ({ label, onClick }) => {
  return (
    <div onClick={onClick} className={`${Styles.fontSize} ${Styles.bg}`}>
      {label}
    </div>
  )
}

export default Pagination
