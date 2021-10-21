export interface SelectProps {
  setPage: React.Dispatch<React.SetStateAction<number>>
  setSortValue: React.Dispatch<React.SetStateAction<string>>
  sortValue: string
  options: {
    value: string
    label: string
  }[]
  caption: string
}
