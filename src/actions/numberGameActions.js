import * as types from '../constants/types'

export const updateNumbers = numbers => ({
  type: types.UPDATE_NUMBERS,
  payload: numbers
})

export const updateMoves = moves => ({
  type: types.UPDATE_MOVES,
  payload: moves
})

export const updateHighscore = score => ({
  type: types.UPDATE_HIGHSCORE,
  payload: score
})