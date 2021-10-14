import type { NextPage } from 'next'
import { WithLayout } from '../HOC/Layout'
import {
  ContentBox,
  ContentBoxText,
  MockImage,
  WrapperHome,
  WrapperImageHome,
} from '../styles/HomePage/home.style'

import { useRouter } from 'next/dist/client/router'

const HomeData = [
  {
    photo: '/mortyCar.jpeg',
    title: 'Characters',
    text: 'It is page about this',
    _id: 'characters',
  },
  {
    photo: '/mortyAdv.jpeg',
    title: 'Episodes',
    text: 'It is page about this',
    _id: 'episodes',
  },
  {
    photo: '/smth.png',
    title: 'Locations',
    text: 'It is page about this',
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
          </ContentBox>
        )
      })}
    </WrapperHome>
  )
}

export default WithLayout(Home)
