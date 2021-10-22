export const paginationLogic = (
  pages: number,
  page: number
): (string | number)[] => {
  const arr = []
  if (pages && pages > 9) {
    if (page < 9) {
      for (let i = 1; i <= 8; i++) {
        arr.push(i)
      }
      arr.push('>>')
      arr.push(pages)
    } else if (page + 6 >= pages) {
      arr.push(1)
      arr.push('<<')
      for (let i = pages - 6; i <= pages; i++) {
        arr.push(i)
      }
    } else {
      arr.push(1)
      arr.push('<<')
      for (let i = page - 2; i <= page + 3; i++) {
        arr.push(i)
      }
      arr.push('>>')
      arr.push(pages)
    }
  } else {
    if (pages) {
      for (let i = 1; i <= pages; i++) {
        arr.push(i)
      }
    }
  }
  return arr
}
