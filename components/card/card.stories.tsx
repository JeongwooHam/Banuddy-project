import type { Meta, StoryObj } from '@storybook/react'
import '../../app/globals.css'
import Card from './card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type CardStory = StoryObj<typeof Card>

export const PrimaryCard: CardStory = {
  args: {
    label: 'Primary card',
  },
}
