import type { NextPage } from 'next'
import { WithLayout } from '../HOC/Layout'
import { WrapperHome } from '../styles/HomePage/home.style'
import ImageBox from '../Components/Organisms/ImageBox/ImageBox'
import { HomeData } from '../helpers/homeData'

const Home: NextPage = () => {
  return (
    <WrapperHome>
      {HomeData.map((item, i) => {
        return <ImageBox key={i} item={item} />
      })}
    </WrapperHome>
  )
}

export default WithLayout(Home)
