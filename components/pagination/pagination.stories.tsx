import type { Meta, StoryObj } from '@storybook/react'
import '../../app/globals.css'
import Pagination from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Button',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export default meta

type PaginationStory = StoryObj<typeof Pagination>

export const PrimaryBtn: PaginationStory = {
  args: {
    label: 'Primary Pagination',
  },
}
