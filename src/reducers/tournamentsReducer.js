import { TOURNAMENTS_SHOW } from '../actions/tournamentsActions'

export default function tournaments (state = { list: [] }, action) {
  switch (action.type) {
    case TOURNAMENTS_SHOW:
      return Object.assign({}, state, {list: action.payload})
    default:
      return state
  }
}
