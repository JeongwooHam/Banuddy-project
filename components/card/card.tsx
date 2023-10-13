import React from 'react'
import Styles from './styles'
import { Card, CardContent } from '@/components/ui/card'

export interface CardProps {
  content?: React.ReactNode
  onClick?: () => void
  boxStyle?: string
}

const OneCard: React.FC<CardProps> = ({ content, onClick, boxStyle }) => {
  return (
    <Card className={boxStyle}>
      <CardContent>{content}</CardContent>
    </Card>
  )
}

export default OneCard
