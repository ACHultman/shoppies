import { ADD_nomination, REMOVE_nomination } from './types'

export const addNomination = (nominationState: string[], newEntry: string) => (
  dispatch: (arg0: { type: string; payload: string[] }) => any
): void => {
  let newNominationState: string[] = []
  if (nominationState.length < 5) {
    newNominationState = [...nominationState, newEntry]
  } else {
    alert('Sorry, you have reached the maximum of five nominations.')
    newNominationState = nominationState
  }
  return dispatch({
    type: ADD_nomination,
    payload: newNominationState,
  })
}

export const removeNomination = (
  nominationState: string[],
  nominationToRemove: string
) => (dispatch: (arg0: { type: string; payload: string[] }) => any): void => {
  const removeIndex = nominationState.indexOf(nominationToRemove)
  let newGlobalState = []
  if (removeIndex >= 0) {
    newGlobalState = nominationState.filter(
      (nominationID) => nominationID !== nominationToRemove
    )
  }
  return dispatch({
    type: REMOVE_nomination,
    payload: newGlobalState,
  })
}
