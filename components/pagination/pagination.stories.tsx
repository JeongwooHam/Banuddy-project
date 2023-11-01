import type { Meta, StoryObj } from '@storybook/react'
import '../../app/globals.css'
import Pagination from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number' },
    currentPage: { control: 'number' },
    limit: { control: 'number' },
    handlePage: { action: 'pageChanged' },
  },
}

export default meta

type PaginationStory = StoryObj<typeof Pagination>

export const PrimaryBtn: PaginationStory = {
  args: {
    total: 100,
    currentPage: 1,
    limit: 10,
  },
}
