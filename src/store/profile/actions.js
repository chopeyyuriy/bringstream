
export const Types = {
  GET_USER_PROFILE_REQUEST: 'GET_USER_PROFILE_REQUEST',
  GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
  
  CHANGE_USER_PROFILE_REQUEST: 'CHANGE_USER_PROFILE_REQUEST',
  CHANGE_USER_PROFILE_SUCCESS: 'CHANGE_USER_PROFILE_SUCCESS',
}

const getUserProfileRequest = () => ({
  type: Types.GET_USER_PROFILE_REQUEST,
})

const getUserProfileSucces = (payload) => ({
  type: Types.GET_USER_PROFILE_SUCCESS,
  payload
})

const changeUserProfileRequest = (payload) => ({
  type: Types.CHANGE_USER_PROFILE_REQUEST,
  payload
})

const changeUserProfileSucces = () => ({
  type: Types.CHANGE_USER_PROFILE_SUCCESS,
})


export default {
  getUserProfileRequest,
  getUserProfileSucces,
  changeUserProfileRequest,
  changeUserProfileSucces,
}