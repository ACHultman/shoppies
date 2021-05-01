export const formatYear = (year: string): string => {
  if (year.charAt(year.length - 1) === '–') {
    year = year + 'Present'
  }
  return year
}
