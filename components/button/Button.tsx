import React, { FC } from 'react'
import Styles from './styles'

type ButtonTypes = {
  label: string
  outlined?: boolean
  onClick: () => void
  style?: string
}

export const Button: FC<ButtonTypes> = ({
  onClick,
  label = 'btnText',
  outlined,
  style,
}) => {
  const isOutlined = outlined ? Styles.OUTLINED_BUTTON : Styles.CONTAINED_BUTTON
  return (
    <button onClick={onClick} className={isOutlined + style}>
      <span>{label}</span>
    </button>
  )
}
