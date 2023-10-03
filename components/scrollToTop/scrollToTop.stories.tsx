import type { Meta, StoryObj } from '@storybook/react'
import '../../app/globals.css'
import ScrollToTop from './scrollToTop'

const meta: Meta<typeof ScrollToTop> = {
  title: 'Components/Button',
  component: ScrollToTop,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type ScrollStory = StoryObj<typeof ScrollToTop>

export const PrimaryBtn: ScrollStory = {
  args: {
    label: 'Primary ScrollToTop',
  },
}
