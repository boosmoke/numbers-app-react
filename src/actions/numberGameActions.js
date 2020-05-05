import * as types from '../constants/types'

export const numbers = numbers => ({
    type: types.EXAMPLE_ACTION,
    payload: numbers
  })

export const updateNumbers = numbers => ({
  type: types.UPDATE_NUMBERS,
  payload: numbers
})