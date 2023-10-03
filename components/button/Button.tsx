import React, { FC } from 'react'
import Styles from './styles'

type ButtonTypes = {
  label: string
  outlined?: boolean
  onClick: () => void
}

export const Button: FC<ButtonTypes> = ({
  onClick,
  label = 'btnText',
  outlined,
}) => {
  return (
    <button
      onClick={onClick}
      className={outlined ? Styles.OUTLINED_BUTTON : Styles.CONTAINED_BUTTON}
    >
      <span>{label}</span>
    </button>
  )
}
