import { SET_LIKE } from '../action'

const initialState = {
  likeSong: [],
}
const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE:
      return {
        ...state,
        likeSong: [...state.likeSong, action.payload],
      }
    default:
      return state
  }
}

export default likeReducer