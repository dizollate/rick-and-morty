import type { NextPage } from 'next'
import { WithLayout } from '../HOC/Layout'
import { ContentBox, ContentBoxText, MockImage } from './home.style'

import mockImg from '../public/favicon.jpeg'

const HomeData = [
  {
    photo: 'url',
    title: 'Characters',
    text: 'It is page about this',
    _id: '14i2i4h12o14',
  },
  {
    photo: 'url',
    title: 'Characters',
    text: 'It is page about this',
    _id: '14i2i4h12os4',
  },
  {
    photo: 'url',
    title: 'Characters',
    text: 'It is page about this',
    _id: '14i2i4s12o14',
  },
]

const Home: NextPage = () => {
  return (
    <>
      {HomeData.map((i) => {
        return (
          <ContentBox key={i._id}>
            <MockImage src={mockImg} alt="mock" width="150px" height="150px" />
            <ContentBoxText>{i.title}</ContentBoxText>
          </ContentBox>
        )
      })}
    </>
  )
}

export default WithLayout(Home)
