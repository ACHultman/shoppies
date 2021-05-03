import { ADD_nomination, REMOVE_nomination, IState } from './types'

const initialState = {
  server: '',
  client: '',
  nominations: [],
}

// Creating my reducer
export const reducer = (
  state = initialState,
  action: { type: any; payload: any }
): IState => {
  switch (action.type) {
    case ADD_nomination:
      return { ...state, nominations: action.payload }
    case REMOVE_nomination:
      return { ...state, nominations: action.payload }
    default:
      return state
  }
}

export default reducer
