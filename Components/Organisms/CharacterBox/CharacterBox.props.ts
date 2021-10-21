import { ReactNode } from 'react'
import { ICharacter } from '../../../interfaces/CharactersInterfaces'

export interface CharacterBoxProps {
  children?: ReactNode
  item: ICharacter
}
