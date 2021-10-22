import styled from 'styled-components'

export const HeaderStyles = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 20px;
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

export const LinkWrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  max-width: 600px;
  transition: all 0.4s ease;
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
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(p) => (p.active ? '0' : '-500px')};
    flex-direction: column;
    padding: 70px 70px;
    font-size: 30px;
    align-items: center;
    height: 100vh;
    color: var(--white);
    background-color: var(--black);
    opacity: 1;
    border-radius: 20px 0 0 20px;
    a {
      margin: 5px 0;
    }
  }
`

export const MenuBurger = styled.div<{ active: boolean }>`
  display: none;
  transition: all 0.4s ease;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  position: fixed;
  top: 30px;
  right: 30px;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
    z-index: 12;
  }
`

export const LineMenuBurger = styled.span<{ active: boolean }>`
  content: '';
  display: block;
  position: relative;
  transition: all 0.4s ease;
  width: 90%;
  height: 4px;
  background-color: ${(p) => (p.active ? 'var(--white)' : 'var(--black)')};
  border-radius: 5px;
  z-index: 13;
  ::after {
    content: '';
    transition: all 0.4s ease;
    position: absolute;
    top: ${(p) => (p.active ? '0px' : '8px')};
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--black);
    border-radius: 5px;
    z-index: 13;
    transform: ${(p) => (p.active ? 'rotate(-45deg)' : 'rotate(0)')};
  }
  ::before {
    content: '';
    position: absolute;
    transition: all 0.4s ease;
    transform: ${(p) => (p.active ? 'rotate(45deg)' : 'rotate(0)')};
    top: ${(p) => (p.active ? '0px' : '-8px')};
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--black);
    border-radius: 5px;
    z-index: 13;
  }
`
