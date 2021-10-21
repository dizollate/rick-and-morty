import { ReactNode } from 'react'
export interface ImageBoxProps {
  children?: ReactNode
  item: {
    photo: string
    title: string
    text: string
    _id: string
  }
}
