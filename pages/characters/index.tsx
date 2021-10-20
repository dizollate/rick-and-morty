import React, { useEffect, useRef, useState } from 'react'
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
  Form,
  Input,
  Button,
  CharactersHeader,
  SearchImg,
  WrapperCharacterFilter,
  Select,
  SelectWrapper,
  ResetButton,
} from '../../styles/Charactets/Characters.styles'
import { ICharacter, IInfo } from '../../interfaces/CharactersInterfaces'
import { useRouter } from 'next/dist/client/router'
import { motion } from 'framer-motion'
import { pageNumberFromString } from '../../helpers/pageNumberString'
import {
  optionsSortingByGender,
  optionsSortingByStatus,
} from '../../helpers/optionsSorting'

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

  const formRef = useRef<HTMLDivElement>(null)
  const inputFocus = useRef<HTMLDivElement>(null)

  const router = useRouter()

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
        arr.push('..+')
        arr.push(infoPage?.pages)
      } else if (page + 6 >= infoPage.pages) {
        arr.push(1)
        arr.push('-..')
        for (let i = infoPage.pages - 6; i <= infoPage.pages; i++) {
          arr.push(i)
        }
      } else {
        arr.push(1)
        arr.push('-..')
        for (let i = page - 2; i <= page + 3; i++) {
          arr.push(i)
        }
        arr.push('..+')
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
  }, [infoPage?.next, infoPage?.pages])

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
      .catch((e) => {
        console.log(e.message)
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
          <SelectWrapper>
            <span>Sort by gender</span>
            <Select
              value={genderSortValue}
              onChange={(e) => {
                setGenderSortValue(e.target.value)
                setPage(1)
              }}
            >
              {optionsSortingByGender.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </Select>
          </SelectWrapper>
          <SelectWrapper>
            <span>Sort by status</span>
            <Select
              value={statusSortValue}
              onChange={(e) => {
                setStatusSortValue(e.target.value)
                setPage(1)
              }}
            >
              {optionsSortingByStatus.map((item, i) => {
                return (
                  <option key={i} value={item.value}>
                    {item.label}
                  </option>
                )
              })}
            </Select>
          </SelectWrapper>
          <Form
            barOpened={barOpened}
            onClick={() => {
              setBarOpened(true)
              inputFocus.current!.focus()
            }}
            onFocus={() => {
              setBarOpened(true)
              inputFocus.current!.focus()
            }}
            onBlur={() => {
              setBarOpened(false)
            }}
            onSubmit={onFormSubmit}
            ref={formRef as any}
          >
            <Button type="submit" barOpened={barOpened}>
              <SearchImg src="/search.png" alt="search"></SearchImg>
            </Button>
            <Input
              onChange={(e) => setInput(e.target.value)}
              ref={inputFocus as any}
              value={input}
              barOpened={barOpened}
              placeholder="Search for a character..."
            />
          </Form>
        </WrapperCharacterFilter>
      </CharactersHeader>
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
            {arrayOfPageNumbers &&
              arrayOfPageNumbers.map((i) => {
                return (
                  <ButtonOFpage
                    key={i}
                    disabled={
                      infoPage.next && infoPage.prev == null
                        ? i === 1
                        : infoPage.next
                        ? i === pageNumberFromString(infoPage.next)
                        : i == infoPage.pages && infoPage.next === null
                        ? true
                        : false
                    }
                    onClick={() => {
                      if (i == '..+') {
                        setPage(
                          Number(
                            arrayOfPageNumbers[arrayOfPageNumbers.length - 3]
                          ) + 1
                        )
                      } else if (i == '-..') {
                        setPage(Number(arrayOfPageNumbers[2]) - 1)
                      } else {
                        setPage(Number(i))
                      }
                      window.scrollTo({ top: 100, left: 0, behavior: 'smooth' })
                    }}
                    active={
                      infoPage.next && infoPage.prev == null
                        ? i === 1
                        : infoPage.next
                        ? i === pageNumberFromString(infoPage.next)
                        : i == infoPage.pages && infoPage.next === null
                        ? true
                        : false
                    }
                  >
                    {i}
                  </ButtonOFpage>
                )
              })}
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
