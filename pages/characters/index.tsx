import { useEffect, useState } from 'react'
import { getCharacters } from 'rickmortyapi'
import { WithLayout } from '../../HOC/Layout'
import {
  CharacterBox,
  ImageCharacter,
  NameCharacter,
  WrapperCharacters,
  WrapperContent,
  LocationCharacter,
  BoxWrapper,
  ButtonOFpage,
  WrapperButton,
  AllCharacter,
} from '../../styles/Charactets/Characters.styles'
import { ICharacter, IInfo } from '../../interfaces/CharactersInterfaces'
import { useRouter } from 'next/dist/client/router'
import { motion } from 'framer-motion'

const Characters = () => {
  const [charactersOnPage, setCharacterOnPage] = useState<ICharacter[]>()
  const [infoPage, setInfoPage] = useState<IInfo>()
  const [page, setPage] = useState<number>(1)

  const router = useRouter()

  const item = {
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

  useEffect(() => {
    getCharacters({ page: page })
      .then((response) => {
        setCharacterOnPage(response.data.results)
        setInfoPage(response.data.info)
      })
      .catch((e) => {
        console.log(e.message)
        return []
      })
  }, [page])

  return (
    <WrapperCharacters>
      {infoPage?.count && (
        <AllCharacter>
          Number of all characters: <span>{infoPage.count}</span>
        </AllCharacter>
      )}
      <BoxWrapper as={motion.div} initial="closed" animate="opened" layout>
        {charactersOnPage &&
          charactersOnPage.map((i: ICharacter) => {
            return (
              <CharacterBox
                as={motion.div}
                variants={item}
                key={i.id}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setTimeout(() => {
                    router.push(`/characters/${i.id}`)
                  }, 500)
                }}
              >
                <ImageCharacter
                  src={i.image}
                  alt={`avatar of ${i.name}`}
                  width={'100'}
                  height={'100'}
                  objectFit="cover"
                  priority={true}
                />
                <WrapperContent>
                  <NameCharacter>{i.name}</NameCharacter>
                  <LocationCharacter>
                    Location: {i.location.name}
                  </LocationCharacter>
                  <LocationCharacter>Gender: {i.gender}</LocationCharacter>
                  <LocationCharacter>Created: {i.created}</LocationCharacter>
                </WrapperContent>
              </CharacterBox>
            )
          })}
      </BoxWrapper>
      {infoPage && (
        <>
          <WrapperButton>
            <ButtonOFpage
              disabled={infoPage.prev === null}
              onClick={() => {
                setPage((prev) => prev - 1)
                window.scrollTo({ top: 100, left: 0, behavior: 'smooth' })
              }}
            >
              Prev
            </ButtonOFpage>
            <ButtonOFpage
              disabled={infoPage.next === null}
              onClick={() => {
                setPage((prev) => prev + 1)
                window.scrollTo({ top: 100, left: 0, behavior: 'smooth' })
              }}
            >
              Next
            </ButtonOFpage>
          </WrapperButton>
        </>
      )}
    </WrapperCharacters>
  )
}

export default WithLayout(Characters)
