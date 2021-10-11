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
} from '../../styles/Charactets/Characters.styles'
import { ICharacter, IInfo } from '../../interfaces/CharactersInterfaces'

const Characters = () => {
  const [charactersOnPage, setCharacterOnPage] = useState<ICharacter[]>()
  const [infoPage, setInfoPage] = useState<IInfo>()
  const [page, setPage] = useState<number>(1)

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

  if (charactersOnPage) {
    return (
      <WrapperCharacters>
        {infoPage?.count && (
          <div style={{ marginBottom: '10px' }}>
            Number of all characters: {infoPage.count}
          </div>
        )}
        <BoxWrapper>
          {charactersOnPage.map((i: ICharacter) => {
            return (
              <CharacterBox key={i.id}>
                <ImageCharacter
                  src={i.image}
                  alt={`avatar of ${i.name}`}
                  width={'100'}
                  height={'100'}
                  objectFit="cover"
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
  } else {
    return <></>
  }
}

export default WithLayout(Characters)
