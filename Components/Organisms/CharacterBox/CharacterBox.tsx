import { CharacterBoxProps } from './CharacterBox.props'
import {
  CharacterBoxWrapper,
  ImageCharacter,
  LocationCharacter,
  NameCharacter,
  WrapperContent,
} from './CharacterBox.style'
import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'

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
      <ImageCharacter
        src={item.image}
        alt={`avatar of ${item.name}`}
        width={'100'}
        height={'100'}
        objectFit="cover"
        priority={true}
      />
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
