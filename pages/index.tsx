import type { NextPage } from 'next'
import { WithLayout } from '../HOC/Layout'

const Home: NextPage = () => {
  return <div>Its main</div>
}

export default WithLayout(Home)
