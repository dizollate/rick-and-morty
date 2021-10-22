import styled from 'styled-components'
import { ButtonShowMore } from '../Character/Character.style'

export const WrapperCharacters = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  align-self: baseline;
  @media screen and (max-width: 1024px) {
    padding: 20px 0;
  }
`

export const WrapperCharacterFilter = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

export const ResetButton = styled(ButtonShowMore)`
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: var(--white);
  font-size: 18px;
  @media screen and (max-width: 1024px) {
    align-self: initial;
    margin-top: 15px;
  }
`

export const AllCharacter = styled.div`
  span {
    transition: all 0.4s ease;
  }
  span:hover {
    color: var(--light-hover);
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    align-self: center;
  }
`
export const CharactersHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-end;
  }
`
export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
