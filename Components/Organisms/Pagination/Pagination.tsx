import { pageNumberFromString } from '../../../helpers/pageNumberString'
import { PaginationProps } from './Pagination.props'
import { ButtonOFpage, WrapperButton } from './Pagination.styles'

const Pagination = ({
  setPage,
  infoPage,
  arrayOfPageNumbers,
}: PaginationProps): JSX.Element => {
  return (
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
                if (i == '>>') {
                  setPage(
                    Number(arrayOfPageNumbers[arrayOfPageNumbers.length - 3]) +
                      1
                  )
                } else if (i == '<<') {
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
  )
}

export default Pagination
