export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const formatYear = (year: string): string => {
  if (year.charAt(year.length - 1) === '–') {
    year = year + 'Present'
  }
  return year
}
