import styled from 'styled-components'

export const HeaderStyles = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--white);
  color: var(--black);
  display: flex;
  justify-content: center;
  border-radius: 0 0 15px 15px;
  z-index: 10;
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
  object-fit: cover;
  cursor: pointer;
  transition: all 0.4s ease;
`
export const WrapperLogoImg = styled.div`
  width: 70px;
  cursor: pointer;
  transition: all 0.4s ease;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  a {
    margin-left: 40px;
    text-decoration: none;
    background-image: linear-gradient(var(--light-hover), var(--light-hover));
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: all 0.3s ease-out;
  }
  a:hover {
    background-size: 100% 2px;
  }
`
