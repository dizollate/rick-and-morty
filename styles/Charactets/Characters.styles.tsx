import styled from 'styled-components'
import { ButtonShowMore } from '../Character/Character.style'

export const WrapperCharacters = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  align-self: baseline;
`

export const WrapperCharacterFilter = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ResetButton = styled(ButtonShowMore)`
  border-radius: 15px;
  padding: 5px 10px;
  margin-right: 10px;
  background-color: var(--white);
  font-size: 18px;
`

export const AllCharacter = styled.div`
  span {
    transition: all 0.4s ease;
  }
  span:hover {
    color: var(--light-hover);
  }
`
export const CharactersHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`
export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
