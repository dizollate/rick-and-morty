import { useState } from 'react'
import { getCharacter } from 'rickmortyapi'
import { WithLayout } from '../../HOC/Layout'
import {
  CharacterBox,
  ImageCharacter,
  WrapperCharacters,
} from './Characters.styles'
import { ICharacter } from './CharactersInterfaces'
import { GetStaticProps } from 'next'

const Characters = ({ characters }: TypeProps) => {
  const [charactersOnPage] = useState<ICharacter[]>(characters)

  console.log(charactersOnPage)

  if (charactersOnPage) {
    return (
      <WrapperCharacters>
        {charactersOnPage.map((i: ICharacter) => {
          return (
            <CharacterBox key={i.id}>
              <ImageCharacter
                src={i.image}
                alt={`avatar of ${i.name}`}
                width="100%"
                height="90%"
                layout="responsive"
                objectFit="cover"
              />
              <span>{i.name}</span>
            </CharacterBox>
          )
        })}
      </WrapperCharacters>
    )
  } else {
    return <></>
  }
}

export const getStaticProps: GetStaticProps<TypeProps> = async () => {
  const limitCharacters = 15
  const getArrayCharacters: number[] = []

  for (let i = limitCharacters - 14; i <= limitCharacters; i++) {
    getArrayCharacters.push(i)
  }
  try {
    const charactersOnPage = await getCharacter(getArrayCharacters)
      .then((response) => {
        return response.data
      })
      .catch((e) => {
        console.log(e.message)
        return []
      })
    return { props: { characters: charactersOnPage } }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

interface TypeProps extends Record<string, unknown> {
  characters: ICharacter[]
}

export default WithLayout(Characters)
