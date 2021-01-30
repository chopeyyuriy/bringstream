import {put} from 'redux-saga/effects';
import Actions from '../store/actions';
import { API } from "../helpers/api";

export function* watchGetLanguages() {
      const response = yield API.languages.getLanguages();
      if(response.status === 200) {
          if(response.data.status === "error") {
              yield put(
                  Actions.common.setErrorNotify(response?.data?.message || "Server error")
              ); 
          } else {
              yield put(
                  Actions.languages.getLanguagesSuccess(response?.data)
              );
          } 
      } else {
          yield put(Actions.common.setErrorNotify(response.status + "Server error"))
      }
}

export function* watchGetChannelLanguages(action) {
      const response = yield API.languages.getChannelLanguages(action.payload);
      if(response.status === 200) {
          if(response.data.status === "error") {
              yield put(
                  Actions.common.setErrorNotify(response?.data?.message || "Server error")
              ); 
          } else {
              yield put(
                  Actions.languages.getChannelLanguagesSuccess(response?.data)
              );
          } 
      } else {
          yield put(Actions.common.setErrorNotify(response.status + "Server error"))
      }
}

export function* watchUpdateChannelLanguages(action) {
    const response = yield API.languages.updateChannelLanguages(action.payload);
    if(response.status === 200) {
        if(response.data.status === "error") {
            yield put(
                Actions.common.setErrorNotify(response?.data?.message || "Server error")
            )
        } else {
            yield put(
                Actions.languages.updateChannelLanguagesSuccess()
            );
        } 
    } else {
        yield put(
            Actions.common.setErrorNotify(response.status + "Server error")
        )
    }
}