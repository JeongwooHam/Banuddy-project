import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  decorators: [withKnobs],
}

export const primary = () => {
  const label = text('Label', 'primary 버튼입니다.')
  const outlined = boolean('outlined', false)
  return (
    <Button onClick={action('clicked')} outlined={outlined} label={label} />
  )
}

export const secondary = () => {
  const label = text('Label', 'secondary 버튼입니다.')
  const outlined = boolean('outlined', true)
  return (
    <Button onClick={action('clicked')} outlined={outlined} label={label} />
  )
}

// import type { Meta, StoryObj } from '@storybook/react'
// import '../../app/globals.css'
// import { Button } from './Button'

// const meta: Meta<typeof Button> = {
//   title: 'Components/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {
//     label: { control: 'text' },
//     onClick: { action: 'clicked' },
//   },
// }

// export default meta

// type BtnStory = StoryObj<typeof Button>

// export const PrimaryBtn: BtnStory = {
//   args: {
//     label: 'Primary Button',
//   },
// }
