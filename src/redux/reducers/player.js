import { SET_PLAYER } from '../action'

const initialState = {
  selectedAlbum: null,
}
const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER:
      return {
        ...state,
        selectedAlbum: action.payload,
      }
    default:
      return state
  }
}

export default playerReducer