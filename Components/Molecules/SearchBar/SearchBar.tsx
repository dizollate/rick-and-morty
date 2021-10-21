import React, { ForwardedRef, forwardRef } from 'react'
import { SearchBarProps } from './SearchBar.props'
import { Form, Button, Input, SearchImg } from './SearchBar.style'

const SearchBar = forwardRef(function SearchBar(
  { barOpened, setInput, inputFocus, input, ...props }: SearchBarProps,
  ref: ForwardedRef<HTMLFormElement>
): JSX.Element {
  return (
    <Form barOpened={barOpened} {...props} ref={ref}>
      <Button type="submit" barOpened={barOpened}>
        <SearchImg src="/search.png" alt="search"></SearchImg>
      </Button>
      <Input
        onChange={(e) => setInput(e.target.value)}
        ref={inputFocus}
        value={input}
        barOpened={barOpened}
        placeholder="Search for a character..."
      />
    </Form>
  )
})

export default SearchBar
