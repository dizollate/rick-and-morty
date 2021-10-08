import {
  HeaderStyles,
  HeaderWrapper,
  LinkWrapper,
  LogoImage,
} from './Header.styles'
import Logo from '../../public/favicon.jpeg'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Header = (): JSX.Element => {
  const router = useRouter()
  return (
    <HeaderStyles>
      <HeaderWrapper>
        <LogoImage
          src={Logo}
          height="70px"
          width="70px"
          alt="logo"
          onClick={() => router.push('/')}
        />
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
