import { IMovieLong } from './types'

export const formatYear = (year: string): string => {
  if (!year) return 'No Year'
  if (year.charAt(year.length - 1) === '–') {
    year = year + 'Present'
  }
  return year
}

export const fetchNominations = async (
  imbdbIDs: string[]
): Promise<IMovieLong[]> => {
  const nominations: IMovieLong[] = []
  for (const nominationID of imbdbIDs) {
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/nominations/${nominationID}`
    )
    const searchResults = (await request.json()).nomination
    nominations.push(searchResults)
  }
  return nominations
}
