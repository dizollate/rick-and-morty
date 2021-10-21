import { DetailedHTMLProps, FormHTMLAttributes, LegacyRef } from 'react'

export interface SearchBarProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  items?: string
  barOpened: boolean
  setInput: React.Dispatch<React.SetStateAction<string>>
  inputFocus: React.RefObject<HTMLInputElement>
  input: string
  ref: LegacyRef<HTMLFormElement> | undefined
}
