import { put } from 'redux-saga/effects'
import Actions from '../store/actions'
import { API } from '../helpers/api'

export function* watchGetUserProfile() {
  const response = yield API.profile.getUserProfile()

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    }
    if (response.data?.user) {
      sessionStorage.setItem('bringStreamProfile', JSON.stringify(response.data?.user))
      yield put(Actions.profile.getUserProfileSucces(response.data?.user))
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}

export function* watchChangeUserProfile(action) {
  const response = yield API.profile.changeUserProfile(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.profile.getUserProfileRequest())
      yield put(Actions.common.setSuccessNotify('Saved successfully'))
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}