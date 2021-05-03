import { ADD_nomination, REMOVE_nomination } from './types'

export const addNomination = (globalState, newEntry) => (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  let newGlobalState: string[] = []
  if (globalState.length < 5) {
    newGlobalState = [...globalState, newEntry]
  } else {
    alert('Sorry, you have reached the maximum of five nominations.')
    newGlobalState = globalState
  }
  return dispatch({
    type: ADD_nomination,
    payload: newGlobalState,
  })
}

export const removeNomination = (globalState, nominationToRemove) => (
  dispatch: (arg0: { type: string; payload: string[] }) => any
) => {
  const removeIndex = globalState.indexOf(nominationToRemove)
  let newGlobalState = []
  if (removeIndex >= 0) {
    newGlobalState = globalState.filter(
      (nominationID) => nominationID !== nominationToRemove
    )
  }
  return dispatch({
    type: REMOVE_nomination,
    payload: newGlobalState,
  })
}
