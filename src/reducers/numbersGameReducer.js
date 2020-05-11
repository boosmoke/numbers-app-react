import * as types from '../constants/types'

const INITIAL_STATE = {
  numbers: [],
  moves: 0,
  highScore:[133, 80],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_NUMBERS:
      return {
        ...state, numbers: action.payload
      };
    case types.UPDATE_MOVES:
      return {
        ...state, moves: action.payload
      };
    case types.UPDATE_HIGHSCORE:
      return {
        ...state, highScore: [action.payload ,...state.highScore]
      };
    default:
      return state
  }
}