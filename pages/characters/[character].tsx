import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { getCharacter, getEpisode } from 'rickmortyapi'
import { AnimatePresence, motion } from 'framer-motion'
import { Episode } from 'rickmortyapi/dist/interfaces'

import { WithLayout } from '../../HOC/Layout'
import { ICharacter } from '../../interfaces/CharactersInterfaces'
import {
  AnotherText,
  AnotherTextWrapper,
  BoxCharacterEpisodes,
  ButtonShowMore,
  CharacterImage,
  CharacterTitleName,
  Circle,
  CreatedTime,
  EpisodesTitle,
  Status,
  WrapperAnotherInfo,
  WrapperCharacter,
  WrapperCharacterEpisodesBoxes,
  WrapperCharacterImage,
  WrapperContentCharacter,
  WrapperHeader,
  WrapperHeaderTitle,
  WrapperStatus,
} from '../../styles/Character/Character.style'
import { pageNumberFromString } from '../../helpers/pageNumberString'

const Character = () => {
  const router = useRouter()
  const [id, setId] = useState<number>()
  const [character, setCharacter] = useState<ICharacter>()
  const [episodes, setEpisodes] = useState<Episode[]>()
  const [oneEpisode, setOneEpisode] = useState<Episode>()
  const [showMore, setShowMore] = useState<boolean>(false)
  const [imageSize, setImageSize] = useState<boolean>(false)

  const transition = {
    duration: 0.4,
    delay: 0.2,
    ease: 'easeInOut',
  }

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition,
    },
  }

  useEffect(() => {
    setId(Number(router.query.character))
  }, [router])

  useEffect(() => {
    const episodesArray = []
    if (character) {
      for (let i = 0; i < character.episode.length; i++) {
        episodesArray.push(pageNumberFromString(character.episode[i]))
      }
      if (episodesArray.length > 1) {
        getEpisode(episodesArray)
          .then((response) => {
            setEpisodes(response.data)
          })
          .catch((error) => {
            throw error
          })
      } else {
        getEpisode(episodesArray)
          .then((response) => {
            setOneEpisode(response.data as unknown as Episode)
          })
          .catch((error) => {
            throw error
          })
      }
    }
  }, [character])

  useEffect(() => {
    if (id) {
      getCharacter(id)
        .then((response) => {
          console.log(response.data)
          setCharacter(response.data)
        })
        .catch((error) => {
          throw error
        })
    }
  }, [id])

  return (
    <WrapperCharacter
      as={motion.div}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
    >
      <AnimatePresence>
        {character && (
          <>
            <WrapperHeader>
              <WrapperCharacterImage
                onClick={() => setImageSize(!imageSize)}
                imageSize={imageSize}
              >
                <CharacterImage
                  src={character.image}
                  alt={character.name}
                ></CharacterImage>
              </WrapperCharacterImage>
              <WrapperHeaderTitle>
                <CharacterTitleName>{character.name}</CharacterTitleName>
                <CreatedTime>
                  Date of Created: {character.created.slice(0, 10)}
                </CreatedTime>
                <WrapperStatus>
                  <Status>Status: {character.status}</Status>
                  {character.status == 'Alive' ? (
                    <Circle color={'var(--green-ligth)'} />
                  ) : character.status == 'Dead' ? (
                    <Circle />
                  ) : null}
                </WrapperStatus>
              </WrapperHeaderTitle>
            </WrapperHeader>
            <WrapperContentCharacter>
              <EpisodesTitle>
                Episodes with <span>{character.name}</span>
              </EpisodesTitle>
              <WrapperCharacterEpisodesBoxes>
                <AnimatePresence>
                  {episodes && episodes.length !== 0
                    ? episodes.map((item, i) => {
                        let active = true
                        if (i >= 9 && !showMore) {
                          active = false
                        } else if (i >= 9 && showMore) {
                          active = true
                        }
                        return (
                          <BoxCharacterEpisodes key={i} active={active}>
                            <span>{item.name}</span>
                            <span>{item.episode}</span>
                          </BoxCharacterEpisodes>
                        )
                      })
                    : oneEpisode && (
                        <BoxCharacterEpisodes active={true}>
                          <span>{oneEpisode.name}</span>
                          <span>{oneEpisode.episode}</span>
                        </BoxCharacterEpisodes>
                      )}
                </AnimatePresence>
              </WrapperCharacterEpisodesBoxes>
              {episodes && episodes.length > 9 && (
                <ButtonShowMore onClick={() => setShowMore(!showMore)}>
                  {!showMore ? 'Show More' : 'Hide'}
                </ButtonShowMore>
              )}
            </WrapperContentCharacter>
            <WrapperAnotherInfo>
              <EpisodesTitle>
                <span>Another info of</span> {character.name}
              </EpisodesTitle>
              <AnotherTextWrapper>
                <AnotherText>
                  <span>Location:</span> {character.location.name}
                </AnotherText>
                <AnotherText>
                  <span>Origin:</span> {character.origin.name}
                </AnotherText>
                <AnotherText>
                  <span>Gender:</span> {character.gender}
                </AnotherText>
                {character.type && (
                  <AnotherText>
                    <span>Type:</span> {character.type}
                  </AnotherText>
                )}
                <AnotherText>
                  <span>Species:</span> {character.species}
                </AnotherText>
              </AnotherTextWrapper>
            </WrapperAnotherInfo>
          </>
        )}
      </AnimatePresence>
    </WrapperCharacter>
  )
}

export default WithLayout(Character, '/characters')
