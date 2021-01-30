import { Types } from './actions'

const initialState = {
  errorMessage: '',
  successMessage: '',
  loader: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_ERROR_NOTIFY: {
      return {
        ...state, ...{
          errorMessage: action.payload,
        }
      }
    }
    case Types.SET_SUCCESS_NOTIFY: {
      return {
        ...state, ...{
          successMessage: action.payload,
        }
      }
    }
    case Types.SET_LOADER: {
      return {
        ...state,
        loader: action.payload
      }
    }
    default: return state
  }
}

export default reducer
