import { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { motion } from 'framer-motion'

import {
  HeaderStyles,
  HeaderWrapper,
  LinkWrapper,
  LogoImage,
  WrapperLogoImg,
  MenuBurger,
  LineMenuBurger,
} from './Header.styles'

const Header = (): JSX.Element => {
  const router = useRouter()
  const [active, setActive] = useState<boolean>(false)
  return (
    <HeaderStyles>
      <HeaderWrapper>
        <WrapperLogoImg
          as={motion.div}
          transition={{ ease: 'easeIn' }}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 0.95,
            transition: { duration: 0.01 },
          }}
        >
          <LogoImage
            as={motion.img}
            transition={{ ease: 'easeIn' }}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.45,
              transition: { duration: 0.01 },
            }}
            src="/favicon.jpeg"
            alt="logo"
            onClick={() => router.push('/')}
          />
        </WrapperLogoImg>
        <MenuBurger active={active} onClick={() => setActive(!active)}>
          <LineMenuBurger active={active} />
        </MenuBurger>
        <LinkWrapper active={active}>
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
