export const KEY_NOMINATIONS = 'nominations'
export const KEY_ID = 'imdbIDs'

export const handleNominationChangeRequest = (imdbID: string): void => {
  if (!imdbID || imdbID.length === 0) {
    alert('Failed to add nomination. Please try again later.')
    return
  }

  const nominations = localStorage.getItem(KEY_NOMINATIONS)

  if (!nominations || nominations.indexOf(imdbID) === -1) {
    addNomination(imdbID)
  } else {
    removeNomination(imdbID)
  }
}

const addNomination = (imdbID: string): void => {
  const existingNominations = localStorage.getItem(KEY_NOMINATIONS)

  if (!existingNominations || existingNominations.length === 0) {
    // If value string is null or empty
    // Construct JSON and set as value
    localStorage.setItem(KEY_NOMINATIONS, JSON.stringify({ imdbIDs: [imdbID] }))
    return
  }

  let parsedNominations
  try {
    parsedNominations = JSON.parse(existingNominations)
  } catch (e) {
    return
  }

  if (!parsedNominations[KEY_ID] || !parsedNominations[KEY_ID].length) {
    // Undefined, null, or non-array value
    // Construct array and set as value
    parsedNominations[KEY_ID] = [imdbID]
    localStorage.setItem(KEY_NOMINATIONS, JSON.stringify(parsedNominations))
  } else if (
    parsedNominations[KEY_ID].length < 5 &&
    parsedNominations[KEY_ID].indexOf(imdbID) === -1
  ) {
    // If value is unique in array with length less than five, push new ID
    parsedNominations[KEY_ID].push(imdbID)
    localStorage.setItem(KEY_NOMINATIONS, JSON.stringify(parsedNominations))
  }
}

const removeNomination = (imdbID: string) => {
  // Assume imdbID not null
  const nominations = localStorage.getItem(KEY_NOMINATIONS)

  // If value string is null or empty
  if (!nominations || nominations.length === 0) return
  let parsedNominations
  let nominationList
  try {
    parsedNominations = JSON.parse(nominations)
    nominationList = parsedNominations[KEY_ID]
    if (!nominationList) throw Error('No nominations')
  } catch (e) {
    return
  }

  // get index of given ID
  const indexToDelete = nominationList.indexOf(imdbID)

  if (indexToDelete === -1) {
    // if not in array
    return
  } else {
    nominationList.splice(indexToDelete, 1)
  }

  localStorage.setItem(KEY_NOMINATIONS, JSON.stringify(parsedNominations))
}
