import { put } from 'redux-saga/effects'
import Actions from './../store/actions'
import { API } from './../helpers/api'

export function* watchlogin(action) {
  const response = yield API.authorization.logIn(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      sessionStorage.setItem('bringStreamAuth', JSON.stringify(response.data))
      yield put(Actions.authorization.loginSucces(response.data))
      yield put(Actions.profile.getUserProfileRequest())
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}

export function* watchRegisterUser(action) {
  const response = yield API.authorization.registerUser(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.common.setSuccessNotify('Registration successfully, pleas check your email!'))
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}

export function* watchNewPassword(action) {
  const response = yield API.authorization.newPassword(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.common.setSuccessNotify('We sent you new password, pleas chek yout email'))
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}

export function* watchForgotPassword(action) {
  const response = yield API.authorization.forgotPassword(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.common.setSuccessNotify('Sent successfully, pleas check your email!'))
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}