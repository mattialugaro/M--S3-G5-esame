import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchReducer from './reducers/search'
import albumReducer from './reducers/album'
import playerReducer from './reducers/player'
import likeReducer from './reducers/like'

const rootReducer = combineReducers({
  search: searchReducer,
  album: albumReducer,
  player: playerReducer,
  like: likeReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store