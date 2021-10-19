import styled from 'styled-components'
import Image from 'next/image'

export const WrapperCharacters = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  align-self: baseline;
`
export const Form = styled.form<{ barOpened: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  width: ${(props) => (props.barOpened ? '300px' : '30px')};
  cursor: ${(props) => (props.barOpened ? 'auto' : 'pointer')};
  padding: 25px;
  align-items: center;
  height: 30px;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`

export const Input = styled.input<{ barOpened: boolean }>`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? '1rem' : '0rem')};
  border: none;
  color: var(--black);
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: var(--black);
  }
`

export const Button = styled.button<{ barOpened: boolean }>`
  transition: all 0.4s;
  pointer-events: ${(props) => (props.barOpened ? 'auto' : 'none')};
  cursor: ${(props) => (props.barOpened ? 'pointer' : 'none')};
  background-color: transparent;
  border: none;
  outline: none;
  color: var(--black);
  margin-left: ${(props) => (props.barOpened ? '-20px' : '3px')};
`
export const SearchImg = styled.img`
  width: 30px;
`
export const AllCharacter = styled.div`
  span {
    transition: all 0.4s ease;
  }
  span:hover {
    color: var(--light-hover);
  }
`
export const CharactersHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`
export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const CharacterBox = styled.div`
  width: 48%;
  height: max-content;
  padding: 15px;
  margin: 0;
  background: var(--black-hover);
  border-radius: 15px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: [start] 30% [center] 1fr [end];
  gap: 20px;
  cursor: pointer;
  transition: all 0.4s ease;
  transform: scale(1);
  text-align: center;
  box-shadow: 5px 5px 5px #000000;
  :hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 10px #000000;
  }
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`

export const ImageCharacter = styled(Image)`
  border-radius: 15px;
  grid-column: start / center;
`

export const WrapperContent = styled.div`
  grid-column: center / end;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const NameCharacter = styled.span`
  margin-bottom: 10px;
  align-self: center;
  transition: all 0.4s ease;
  ${CharacterBox}:hover & {
    color: var(--light-hover);
  }
`

export const LocationCharacter = styled.span`
  font-size: 14px;
  align-self: center;
  margin-bottom: 10px;
  transition: all 0.4s ease;
  :hover {
    color: var(--light-hover);
  }
`

export const ButtonOFpage = styled.button<{ active?: boolean }>`
  padding: 10px 15px;
  border-radius: 5px;
  background-color: var(--black-hover);
  box-shadow: 2px 2px 5px #000;
  color: var(--white);
  cursor: pointer;
  font-size: 18px;
  border: none;
  transition: all 0.5s ease;
  margin: 0 4px;
  :hover {
    background-color: var(--white);
    color: var(--black);
  }
  :disabled {
    background: ${(p) => (p.active ? 'var(--gray)' : 'var(--gray-dark)')};
    color: ${(p) => (p.active ? 'var(--light-hover)' : 'var(--black)')};
    cursor: default;
  }
`
export const WrapperButton = styled.div`
  display: flex;
  align-self: center;
  margin-top: 10px;
`
