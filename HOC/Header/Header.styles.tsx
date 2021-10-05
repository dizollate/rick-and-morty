import styled from 'styled-components'
import Image from 'next/image'

export const HeaderStyles = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--white);
  color: var(--black);
  display: flex;
  justify-content: center;
  border-radius: 0 0 15px 15px;
`

export const HeaderWrapper = styled.header`
  width: 1100px;
  height: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoImage = styled(Image)`
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  a {
    margin-left: 40px;
    transition: all 0.3s ease;
  }
  a:hover {
    color: var(--numeric);
  }
`
