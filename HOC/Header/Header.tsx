import {
  HeaderStyles,
  HeaderWrapper,
  LinkWrapper,
  LogoImage,
  WrapperLogoImg,
} from './Header.styles'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Header = (): JSX.Element => {
  const router = useRouter()
  return (
    <HeaderStyles>
      <HeaderWrapper>
        <WrapperLogoImg>
          <LogoImage
            src="/favicon.jpeg"
            alt="logo"
            onClick={() => router.push('/')}
          />
        </WrapperLogoImg>
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
