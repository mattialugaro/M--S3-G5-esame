import { SET_ALBUM } from '../action'

const initialState = {
  results: [],
}
const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return {
        ...state,
        results: action.payload,
      }
    default:
      return state
  }
}

export default albumReducer