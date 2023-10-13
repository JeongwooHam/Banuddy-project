import type { Meta, StoryObj } from '@storybook/react'
import '../../app/globals.css'
import Input from './input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type InputStory = StoryObj<typeof Input>

export const PrimaryInput: InputStory = {
  args: {
    label: 'Primary Button',
  },
}
