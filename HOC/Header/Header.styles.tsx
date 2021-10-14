import styled from 'styled-components'

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

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
`
export const WrapperLogoImg = styled.div`
  width: 70px;
  cursor: pointer;
  transition: all 0.5s ease;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  :hover ${LogoImage} {
    transform: scale(1.2);
  }
  :hover {
    transform: scale(0.95);
    box-shadow: 1px 1px 1px #8f8f8f;
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
    color: var(--light-hover);
  }
`
