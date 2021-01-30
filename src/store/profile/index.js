import { Types } from './actions'

const initialState = {
  user: sessionStorage.getItem('bringStreamProfile') ? JSON.parse(sessionStorage.getItem('bringStreamProfile')) : null 
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_PROFILE_SUCCESS: {
      return {
        ...state, ...{
          user: action.payload,
        }
      }
    }
    default: return state
  }
}

export default reducer
