export const pageNumberFromString = (str: string): number => {
  let numberOfPage = 1

  if (!Number(str.slice(-2))) {
    numberOfPage = Number(str.slice(-1))
  } else {
    numberOfPage = Number(str.slice(-2))
  }
  return numberOfPage - 1
}
