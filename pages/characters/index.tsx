import React, { useEffect, useRef, useState } from 'react'
import { getCharacters } from 'rickmortyapi'
import { WithLayout } from '../../HOC/Layout'
import {
  WrapperCharacters,
  BoxWrapper,
  AllCharacter,
  CharactersHeader,
  WrapperCharacterFilter,
  ResetButton,
} from '../../styles/Charactets/Characters.styles'
import { ICharacter, IInfo } from '../../interfaces/CharactersInterfaces'
import { motion } from 'framer-motion'
import {
  optionsSortingByGender,
  optionsSortingByStatus,
} from '../../helpers/optionsSorting'
import CharacterBox from '../../Components/Organisms/CharacterBox/CharacterBox'
import Pagination from '../../Components/Organisms/Pagination/Pagination'
import Select from '../../Components/Molecules/Select/Select'
import SearchBar from '../../Components/Molecules/SearchBar/SearchBar'

const Characters = () => {
  const [charactersOnPage, setCharacterOnPage] = useState<ICharacter[]>()
  const [infoPage, setInfoPage] = useState<IInfo>()
  const [page, setPage] = useState<number>(1)
  const [arrayOfPageNumbers, setArrayOfPageNumbers] =
    useState<(string | number | undefined)[]>()
  const [input, setInput] = useState('')
  const [barOpened, setBarOpened] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [genderSortValue, setGenderSortValue] = useState('')
  const [statusSortValue, setStatusSortValue] = useState('')

  const formRef = useRef<HTMLFormElement>(null)
  const inputFocus = useRef<HTMLInputElement>(null)

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchValue(input)
    setPage(1)
    setInput('')
    setBarOpened(false)
  }

  useEffect(() => {
    const arr = []
    if (infoPage?.pages && infoPage?.pages > 9) {
      if (page < 9) {
        for (let i = 1; i <= 8; i++) {
          arr.push(i)
        }
        arr.push('>>')
        arr.push(infoPage?.pages)
      } else if (page + 6 >= infoPage.pages) {
        arr.push(1)
        arr.push('<<')
        for (let i = infoPage.pages - 6; i <= infoPage.pages; i++) {
          arr.push(i)
        }
      } else {
        arr.push(1)
        arr.push('<<')
        for (let i = page - 2; i <= page + 3; i++) {
          arr.push(i)
        }
        arr.push('>>')
        arr.push(infoPage?.pages)
      }
    } else {
      if (infoPage?.pages) {
        for (let i = 1; i <= infoPage?.pages; i++) {
          arr.push(i)
        }
      }
    }
    setArrayOfPageNumbers(arr)
  }, [infoPage?.next, infoPage?.pages, page])

  useEffect(() => {
    getCharacters({
      page: page,
      name: searchValue,
      status: statusSortValue,
      gender: genderSortValue,
    })
      .then((response) => {
        setCharacterOnPage(response.data.results)
        setInfoPage(response.data.info)
      })
      .catch((error) => {
        throw error
        return []
      })
  }, [page, searchValue, statusSortValue, genderSortValue])

  return (
    <WrapperCharacters>
      <CharactersHeader>
        <AllCharacter>
          Characters: <span>{infoPage?.count ? infoPage.count : 0}</span>
        </AllCharacter>
        <WrapperCharacterFilter>
          <ResetButton
            onClick={() => {
              setPage(1)
              setGenderSortValue('')
              setStatusSortValue('')
              setSearchValue('')
            }}
          >
            Reset
          </ResetButton>
          <Select
            setPage={setPage}
            setSortValue={setGenderSortValue}
            sortValue={genderSortValue}
            options={optionsSortingByGender}
            caption="Sort by gender"
          />
          <Select
            setPage={setPage}
            setSortValue={setStatusSortValue}
            sortValue={statusSortValue}
            options={optionsSortingByStatus}
            caption="Sort by status"
          />
          <SearchBar
            barOpened={barOpened}
            onClick={() => {
              setBarOpened(true)
              inputFocus.current?.focus()
            }}
            onFocus={() => {
              setBarOpened(true)
              inputFocus.current?.focus()
            }}
            onBlur={() => {
              setBarOpened(false)
            }}
            onSubmit={onFormSubmit}
            ref={formRef}
            setInput={setInput}
            input={input}
            inputFocus={inputFocus}
          />
        </WrapperCharacterFilter>
      </CharactersHeader>
      <BoxWrapper as={motion.div} initial="closed" animate="opened" layout>
        {charactersOnPage &&
          charactersOnPage.map((item: ICharacter, i) => {
            return <CharacterBox key={i} item={item} />
          })}
      </BoxWrapper>
      {infoPage && (
        <Pagination
          setPage={setPage}
          infoPage={infoPage}
          arrayOfPageNumbers={arrayOfPageNumbers}
        />
      )}
    </WrapperCharacters>
  )
}

export default WithLayout(Characters, '/')
