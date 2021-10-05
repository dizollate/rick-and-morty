import { FooterWrapper } from './Footer.styles'
import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <FooterWrapper>
      <div>
        <Link href="/characters">
          <a>Characters</a>
        </Link>
        <Link href="/chapters">
          <a>Chapters</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
        <Link href="/episodes">
          <a>Episodes</a>
        </Link>
      </div>
    </FooterWrapper>
  )
}

export default Footer
