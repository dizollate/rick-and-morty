import styled from 'styled-components'

export const WrapperHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
`

export const WrapperImageHome = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  overflow: hidden;
  border-radius: 15px;
`

export const MockImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 0.5;
`
export const ContentBoxText = styled.span`
  font-size: 55px;
  font-weight: bold;
  transition: all 0.4s ease;
  text-shadow: 1px 1px 1px #000;
  z-index: 10;
  :hover {
    color: var(--dark-hover);
  }
`

export const ContentBox = styled.div`
  transition: all 0.5s ease;
  border-radius: 15px;
  width: 100%;
  height: 425px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  transition: all 0.4s ease;
  :hover ${MockImage} {
    transform: scale(1.05);
    opacity: 0.6;
  }
  :hover ${ContentBoxText} {
    text-shadow: 3px 3px 3px #000;
    transform: scale(1.02);
  }
`
