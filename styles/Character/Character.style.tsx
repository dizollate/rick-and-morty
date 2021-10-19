import styled from 'styled-components'
import Image from 'next/image'

export const WrapperCharacter = styled.div`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
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
    color: var(--light-hover);
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
export const WrapperContentCharacter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 40px;
  margin-top: 40px;
  border-bottom: 2px solid var(--gray);
`
export const EpisodesTitle = styled(CharacterTitleName)`
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
  span {
    color: var(--light-hover);
  }
`

export const WrapperCharacterEpisodesBoxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const BoxCharacterEpisodes = styled.div`
  width: 30%;
  background-color: var(--black-hover);
  box-shadow: 2px 2px 5px #000;
  margin-bottom: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;
  transition: all 0.4s ease;

  span:first-child {
    transition: all 0.4s ease;
    text-align: center;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  :hover span:first-child {
    color: var(--light-hover);
  }
  :hover {
    transform: scale(1.1);
  }
`
export const ButtonShowMore = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  color: var(--black);
  box-shadow: 2px 2px 5px #000;
  background-color: var(--white);
  cursor: pointer;
  font-size: 18px;
  border: none;
  transition: all 0.5s ease;
  margin: 0 4px;
  align-self: center;
`
export const WrapperAnotherInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 40px;
  margin-top: 40px;
`
export const AnotherTextWrapper = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 20px;
`
export const AnotherText = styled.div`
  width: 100%;
  margin-bottom: 15px;
  font-size: 30px;
  span {
    color: var(--light-hover);
  }
`
