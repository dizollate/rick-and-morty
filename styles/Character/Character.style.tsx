import styled from 'styled-components'
import Image from 'next/image'

export const WrapperCharacter = styled.div`
  width: 100%;
  padding: 15px;
`

export const WrapperHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  border-bottom: 2px solid var(--gray);
`
export const CharacterImage = styled(Image)`
  border-radius: 15px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  transition: all 0.4s ease;
  :hover {
    transform: scale(1.05);
  }
`

export const CharacterTitleName = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: -10px;
`

export const WrapperHeaderTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease;
`

export const CreatedTime = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const WrapperStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Status = styled.span`
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  margin-right: 20px;
  transition: all 0.4s ease;
  :hover {
    color: var(--numeric);
  }
`
export const Circle = styled.span`
  width: 30px;
  height: 30px;
  margin-top: 5px;
  border-radius: 50%;
  display: inline-block;
  border: none;
  background-color: ${(props) => props.color || 'var(--red)'};
`
