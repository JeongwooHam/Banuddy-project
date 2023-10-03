import type { Meta, StoryObj } from '@storybook/react'
import '../../app/globals.css'
import Select from './select'

const meta: Meta<typeof Select> = {
  title: 'Components/Button',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type SelectStory = StoryObj<typeof Select>

export const PrimaryBtn: SelectStory = {
  args: {
    label: 'Primary Select',
  },
}
