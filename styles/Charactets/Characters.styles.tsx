import styled from 'styled-components'
import Image from 'next/image'

export const WrapperCharacters = styled.div`
  width: 100%;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
`
export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CharacterBox = styled.div`
  width: 48%;
  padding: 15px;
  margin: 0;
  background: var(--black-hover);
  border-radius: 15px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: [start] 30% [center] 1fr [end];
  gap: 20px;
  cursor: pointer;
  transition: all 0.4s ease;
  transform: scale(1);
  text-align: center;
  :hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`

export const ImageCharacter = styled(Image)`
  border-radius: 15px;
  grid-column: start / center;
`

export const WrapperContent = styled.div`
  grid-column: center / end;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const NameCharacter = styled.span`
  margin-bottom: 10px;
  align-self: center;
  transition: all 0.4s ease;
  ${CharacterBox}:hover & {
    color: var(--light-hover);
  }
`

export const LocationCharacter = styled.span`
  font-size: 14px;
  align-self: center;
  margin-bottom: 10px;
  transition: all 0.4s ease;
  :hover {
    color: var(--light-hover);
  }
`
export const ButtonOFpage = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background: var(--black-hover);
  color: var(--white);
  cursor: pointer;
  font-size: 18px;
  border: none;
  transition: all 0.4s ease;
  :hover {
    background: var(--white);
    color: var(--black-hover);
  }
  :disabled {
    background: var(--gray-dark);
    color: var(--black);
    cursor: default;
  }
`
export const WrapperButton = styled.div`
  display: flex;
  align-self: center;
  margin-top: 10px;
  button:nth-child(2) {
    margin-left: 10px;
  }
`
