import { IInfo } from '../../../interfaces/CharactersInterfaces'

export interface PaginationProps {
  item?: string
  setPage: React.Dispatch<React.SetStateAction<number>>
  infoPage: IInfo
  arrayOfPageNumbers: (string | number | undefined)[] | undefined
}
