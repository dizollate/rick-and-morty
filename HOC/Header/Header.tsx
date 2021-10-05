import {
  HeaderStyles,
  HeaderWrapper,
  LinkWrapper,
  LogoImage,
} from './Header.styles'
import Logo from '../../public/favicon.jpeg'
import Link from 'next/link'

const Header = (): JSX.Element => {
  return (
    <HeaderStyles>
      <HeaderWrapper>
        <LogoImage src={Logo} height="70px" width="70px" alt="logo" />
        <LinkWrapper>
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
        </LinkWrapper>
      </HeaderWrapper>
    </HeaderStyles>
  )
}

export default Header
