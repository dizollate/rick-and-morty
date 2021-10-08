import styled from 'styled-components'
import Image from 'next/image'

export const WrapperCharacters = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CharacterBox = styled.div`
  width: 30%;
  padding: 15px;
  margin: 0;
  background: var(--black-hover);
  border-radius: 15px;
  margin-bottom: 20px;
`

export const ImageCharacter = styled(Image)`
  border-radius: 15px;
`
