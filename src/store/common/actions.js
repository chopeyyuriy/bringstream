
export const Types = {
  SET_ERROR_NOTIFY: 'SET_ERROR_NOTIFY',
  SET_SUCCESS_NOTIFY: 'SET_SUCCESS_NOTIFY',
  SET_LOADER: 'SET_LOADER'
}

const setErrorNotify = (payload) => ({
  type: Types.SET_ERROR_NOTIFY,
  payload
})

const setSuccessNotify = (payload) => ({
  type: Types.SET_SUCCESS_NOTIFY,
  payload
})

const setLoader = (payload) => ({
  type: Types.SET_LOADER,
  payload
})


export default {
  setErrorNotify,
  setSuccessNotify,
  setLoader
}