import type { NextPage } from 'next'
import { WithLayout } from '../HOC/Layout'
import {
  ContentBox,
  ContentBoxText,
  ContextSubTitle,
  MockImage,
  WrapperHome,
  WrapperImageHome,
} from '../styles/HomePage/home.style'

import { useRouter } from 'next/dist/client/router'
import { motion } from 'framer-motion'
import { useState } from 'react'

const HomeData = [
  {
    photo: '/mortyCar.jpeg',
    title: 'Characters',
    text: 'Learn new about the characters?',
    _id: 'characters',
  },
  {
    photo: '/mortyAdv.jpeg',
    title: 'Episodes',
    text: 'Wanna know about all episodes?',
    _id: 'episodes',
  },
  {
    photo: '/smth.png',
    title: 'Locations',
    text: 'Where your favourite character now?',
    _id: 'location',
  },
]

const Home: NextPage = () => {
  const router = useRouter()
  const [xValue, setXValue] = useState<number | string>(0)

  const onNewPage = (id?: string) => {
    setXValue('150%')
    setTimeout(() => {
      router.push(`/${id}`)
    }, 700)
  }

  return (
    <WrapperHome>
      {HomeData.map((i) => {
        return (
          <ContentBox
            as={motion.div}
            transition={{ ease: 'easeIn', duration: 0.5 }}
            animate={{ x: xValue }}
            key={i._id}
            onClick={() => onNewPage(i._id)}
          >
            <WrapperImageHome>
              <MockImage src={i.photo} alt="mock" />
            </WrapperImageHome>
            <ContentBoxText>{i.title}</ContentBoxText>
            <ContextSubTitle>{i.text}</ContextSubTitle>
          </ContentBox>
        )
      })}
    </WrapperHome>
  )
}

export default WithLayout(Home)
