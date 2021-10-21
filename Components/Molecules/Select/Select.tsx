import { SelectProps } from './Select.props'
import { SelectStyled, SelectWrapper } from './Select.style'

const Select = ({
  setPage,
  setSortValue,
  sortValue,
  options,
  caption,
}: SelectProps): JSX.Element => {
  return (
    <SelectWrapper>
      <span>{caption}</span>
      <SelectStyled
        value={sortValue}
        onChange={(e) => {
          setSortValue(e.target.value)
          setPage(1)
        }}
      >
        {options.map((item, i) => {
          return (
            <option key={i} value={item.value}>
              {item.label}
            </option>
          )
        })}
      </SelectStyled>
    </SelectWrapper>
  )
}

export default Select
