import { SET_SEARCH } from '../action'

const initialState = {
  searchValue: [],
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      }
    default:
      return state
  }
}

export default searchReducer