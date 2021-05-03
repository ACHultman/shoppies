export const ADD_nomination = 'addNomination'
export const REMOVE_nomination = 'removeNomination'

export interface IState {
  server: string
  client: string
  nominations: string[]
}
