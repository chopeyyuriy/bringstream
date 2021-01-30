export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  
  REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  
  FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',

  SEND_NEW_PASSAWORD_REQUEST: 'SEND_NEW_PASSAWORD_REQUEST',
  SEND_NEW_PASSAWORD_SUCCESS: 'SEND_NEW_PASSAWORD_SUCCESS',

  LOG_OUT: 'LOG_OUT',

  GET_USER_PROFILE_REQUEST: 'GET_USER_PROFILE_REQUEST',
  GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
  
  CHANGE_USER_PROFILE_REQUEST: 'CHANGE_USER_PROFILE_REQUEST',
  CHANGE_USER_PROFILE_SUCCESS: 'CHANGE_USER_PROFILE_SUCCESS',
}

const loginRequest = (payload) => ({
  type: Types.LOGIN_REQUEST,
  payload
})

const loginSucces = (payload) => ({
  type: Types.LOGIN_SUCCESS,
  payload
})

const registerUserRequest = (payload) => ({
  type: Types.REGISTER_USER_REQUEST,
  payload
})

const registerUserSucces = (payload) => ({
  type: Types.REGISTER_USER_SUCCESS,
  payload
})

const forgotPasswordRequest = (payload) => ({
  type: Types.FORGOT_PASSWORD_REQUEST,
  payload
})

const forgotPasswordSuccess = (payload) => ({
  type: Types.FORGOT_PASSWORD_SUCCESS,
  payload
})

const logOut = () => ({
  type: Types.LOG_OUT
})

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

const sendNewPasswordRequest = (payload) => ({
  type: Types.SEND_NEW_PASSAWORD_REQUEST,
  payload
})


export default {
  loginRequest,
  loginSucces,
  registerUserRequest,
  registerUserSucces,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  logOut,
  getUserProfileRequest,
  getUserProfileSucces,
  changeUserProfileRequest,
  changeUserProfileSucces,
  sendNewPasswordRequest,
}