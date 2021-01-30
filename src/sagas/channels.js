import { put, select } from 'redux-saga/effects'
import Actions from '../store/actions'
import { API } from '../helpers/api'
import selectors from './../selectors'

export function* watchAddChannel(action) {
  const response = yield API.channels.addChannel(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.channels.addChannelSucces(true))
      yield put(Actions.channels.getChannelsRequest())
      yield put(Actions.channels.setActiveChannel(response.data?.channel))
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}

export function* watchDeleteChannel(action) {
  const response = yield API.channels.deleteChannel(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.channels.setActiveChannel(null))
      yield put(Actions.channels.getChannelsRequest())
      yield put(Actions.common.setSuccessNotify('Deleted successfully'))
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}

export function* watchUpdateChannel(action) {
  const response = yield API.channels.updateChannel(action.payload)

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.common.setSuccessNotify('Updated successfully'))
      yield put(Actions.channels.getChannelsRequest())
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}

export function* watchGetChannels() {
  const response = yield API.channels.getChannels()

  if (response.status === 200) {
    if (response.data.status === 'error') {
      yield put(Actions.common.setErrorNotify(response?.data?.message || 'Server error' ))
    } else {
      yield put(Actions.channels.getChannelsSuccess(response?.data))

      const state = yield select()
      const activeChannel = selectors.channels.activeChannel(state)

      if(activeChannel === null){
        yield put(Actions.channels.setActiveChannel(response?.data?.[0]))
      }
    }
  } else {
    yield put(Actions.common.setErrorNotify(response.status + ' Server error'))
  }
}