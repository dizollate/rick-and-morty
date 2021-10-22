import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-evenly;
  align-items: center;
  color: var(--white);
  background-color: var(--black);
  height: 100%;
`

export const Content = styled.div`
  min-height: calc(100vh - 100px);
  width: 100%;
  max-width: 1200px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 570px) {
    padding: 0 20px;
  }
`
export const BackLinkText = styled.span`
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  background-image: linear-gradient(var(--light-hover), var(--light-hover));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: all 0.3s ease-out;
`

export const BackLinkWrapper = styled.span`
  padding: 0 50px;
  max-width: 1200px;
  width: -webkit-fill-available;
  display: flex;
  margin-top: 20px;
  align-items: center;
  @media screen and (max-width: 570px) {
    padding: 0 20px;
  }
`

export const BackArrow = styled.span`
  width: 25px;
  height: 2px;
  background-color: var(--light-hover);
  margin-right: 9px;
  border-radius: 5px 0 0 5px;
  position: relative;
  cursor: pointer;
  ::before {
    width: 10px;
    height: 2px;
    background-color: inherit;
    content: '';
    position: absolute;
    left: 0;
    top: 4px;
    border-radius: 5px 0 0 0;
    transform: rotate(45deg);
  }
  ::after {
    width: 10px;
    height: 2px;
    background-color: inherit;
    content: '';
    position: absolute;
    left: 0;
    top: -4px;
    border-radius: 0 0 0 5px;
    transform: rotate(135deg);
  }
`

export const LinkBackContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover ${BackLinkText} {
    background-size: 100% 2px;
  }
`
