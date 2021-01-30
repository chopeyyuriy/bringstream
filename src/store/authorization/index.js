import { Types } from './actions'

const initialState = {
  authData: sessionStorage.getItem('bringStreamAuth') ? JSON.parse(sessionStorage.getItem('bringStreamAuth')) : null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS: {
      return {
        ...state, ...{
          authData: action.payload,
        }
      }
    }
    case Types.LOG_OUT: {
      return {
        ...state, ...{
          authData: null,
        }
      }
    }
    default: return state
  }
}

export default reducer
