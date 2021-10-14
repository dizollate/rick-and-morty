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

  return (
    <WrapperHome>
      {HomeData.map((i) => {
        return (
          <ContentBox key={i._id} onClick={() => router.push(`/${i._id}`)}>
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
