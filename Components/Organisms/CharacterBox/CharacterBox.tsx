import { useRouter } from 'next/dist/client/router'
import { motion } from 'framer-motion'

import { CharacterBoxProps } from './CharacterBox.props'
import {
  CharacterBoxWrapper,
  ImageCharacter,
  LocationCharacter,
  NameCharacter,
  WrapperContent,
  ImageCharacterWrapper,
} from './CharacterBox.style'

const CharacterBox = ({ item }: CharacterBoxProps): JSX.Element => {
  const router = useRouter()

  const itemAnimation = {
    opened: {
      opacity: 1,
    },
    closed: {
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
      opacity: 0,
    },
  }

  return (
    <CharacterBoxWrapper
      as={motion.div}
      variants={itemAnimation}
      key={item.id}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        setTimeout(() => {
          router.push(`/characters/${item.id}`)
        }, 500)
      }}
    >
      <ImageCharacterWrapper>
        <ImageCharacter src={item.image} alt={`avatar of ${item.name}`} />
      </ImageCharacterWrapper>

      <WrapperContent>
        <NameCharacter>{item.name}</NameCharacter>
        <LocationCharacter>Location: {item.location.name}</LocationCharacter>
        <LocationCharacter>Gender: {item.gender}</LocationCharacter>
        <LocationCharacter>Created: {item.created}</LocationCharacter>
      </WrapperContent>
    </CharacterBoxWrapper>
  )
}

export default CharacterBox
