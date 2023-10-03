import type { Meta, StoryObj } from '@storybook/react'
import '../../app/globals.css'
import Accordion from './accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Button',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type AccordionStory = StoryObj<typeof Accordion>

export const PrimaryAccordion: AccordionStory = {
  args: {
    label: 'Primary Button',
  },
}
