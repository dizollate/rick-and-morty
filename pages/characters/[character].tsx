import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { getCharacter, getEpisode } from 'rickmortyapi'
import { WithLayout } from '../../HOC/Layout'
import { ICharacter } from '../../interfaces/CharactersInterfaces'
import { Episode } from 'rickmortyapi/dist/interfaces'
import {
  CharacterImage,
  CharacterTitleName,
  Circle,
  CreatedTime,
  Status,
  WrapperCharacter,
  WrapperHeader,
  WrapperHeaderTitle,
  WrapperStatus,
} from '../../styles/Character/Character.style'

const Character = () => {
  const router = useRouter()
  const [id, setId] = useState<number>()
  const [character, setCharacter] = useState<ICharacter>()
  const [episodes, setEpisodes] = useState<Episode[]>()

  useEffect(() => {
    setId(Number(router.query.character))
  }, [router])

  useEffect(() => {
    const episodesArray = []
    if (character) {
      for (let i = 0; i < character.episode.length; i++) {
        episodesArray.push(Number(character.episode[i].slice(-1)))
      }

      getEpisode(episodesArray)
        .then((response) => {
          setEpisodes(response.data)
        })
        .catch((error) => {
          throw error
        })
    }
  }, [character])
  console.log(episodes)
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
    <WrapperCharacter>
      {character && (
        <WrapperHeader>
          <CharacterImage
            src={character.image}
            width="150px"
            height="200px"
            objectFit="cover"
            alt={character.name}
          ></CharacterImage>
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
      )}
    </WrapperCharacter>
  )
}

export default WithLayout(Character)
