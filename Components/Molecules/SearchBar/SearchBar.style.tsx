import styled from 'styled-components'

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
