import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type BtnStory = StoryObj<typeof Button>

export const PrimaryBtn: BtnStory = {
  args: {
    label: 'Primary Button',
  },
}
