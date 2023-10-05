import React, { FC } from 'react'
import Styles from './styles'

type ButtonTypes = {
  label: string
  outlined?: boolean
  onClick: () => void
  buttonStyle?: string
}

export const Button: FC<ButtonTypes> = ({
  onClick,
  label = 'btnText',
  outlined,
  buttonStyle,
}) => {
  const isOutlined = outlined ? Styles.OUTLINED_BUTTON : Styles.CONTAINED_BUTTON
  return (
    <button onClick={onClick} className={isOutlined + buttonStyle}>
      <span>{label}</span>
    </button>
  )
}
