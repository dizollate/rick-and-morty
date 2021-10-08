import type { NextPage } from 'next'
import { WithLayout } from '../HOC/Layout'
import { ContentBox, ContentBoxText, MockImage } from './home.style'

import mockImg from '../public/favicon.jpeg'
import { useRouter } from 'next/dist/client/router'

const HomeData = [
  {
    photo: 'url',
    title: 'Characters',
    text: 'It is page about this',
    _id: 'characters',
  },
  {
    photo: 'url',
    title: 'Characters',
    text: 'It is page about this',
    _id: 'chapters',
  },
  {
    photo: 'url',
    title: 'Characters',
    text: 'It is page about this',
    _id: 'episodes',
  },
]

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      {HomeData.map((i) => {
        return (
          <ContentBox key={i._id} onClick={() => router.push(`/${i._id}`)}>
            <MockImage src={mockImg} alt="mock" width="150px" height="150px" />
            <ContentBoxText>{i.title}</ContentBoxText>
          </ContentBox>
        )
      })}
    </>
  )
}

export default WithLayout(Home)
