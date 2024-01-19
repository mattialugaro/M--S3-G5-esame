export const SET_SEARCH = 'SET_SEARCH'
export const SET_PLAYER = 'SET_PLAYER'
export const SET_ALBUM = 'SET_ALBUM'
export const SET_LIKE = 'SET_LIKE'

const searching = (searchValue) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
          searchValue,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      )
      if (resp.ok) {
        let result = await resp.json()
        console.log(result.data)
        dispatch({
          type: SET_SEARCH,
          payload: result.data,
        })
      } else {
        throw new Error('error in search')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const getAlbum = (artist) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key':
              '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      )
      if (resp.ok) {
        let result = await resp.json()
        console.log(result.data)
        dispatch({
          type: SET_ALBUM,
          payload: result.data,
        })
      } else {
        throw new Error('error in album set')
      }
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const setPlayer = (selectedAlbum) => {
  return {
    type: SET_PLAYER,
    payload: selectedAlbum,
  }
}

export const setLike = (likeSong) => {
  return {
    type: SET_LIKE,
    payload: likeSong,
  }
}

export default searching