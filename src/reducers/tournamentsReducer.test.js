import tournaments from './tournamentsReducer'
import { TOURNAMENTS_SHOW } from '../actions/tournamentsActions'

test('Reducer empty state', () => {
  expect(tournaments(undefined, {})).toEqual({ list: []})
})

test('Reducer empty state', () => {
  expect(tournaments([], {
      type: TOURNAMENTS_SHOW,
      payload: 'tournaments'
    })).toEqual({ list: 'tournaments'})
})
