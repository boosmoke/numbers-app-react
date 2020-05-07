import * as types from '../constants/types'

const INITIAL_STATE = {
  numbers: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.EXAMPLE_ACTION:
      return {
        ...state, numbers: action.payload
      };

    case types.UPDATE_NUMBERS:
      return {
        ...state, numbers: action.payload
      };
    default:
      return state
  }
}