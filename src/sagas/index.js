import { all, takeLatest } from "redux-saga/effects";
import { Types as AuthorizationTypes } from "../store/authorization/actions";
import { Types as ProfileTypes } from "../store/profile/actions";
import { Types as ChannelsTypes } from "../store/channels/actions";
import { Types as PlaylistsTypes } from "../store/playlists/actions";
import { Types as VideosTypes } from "../store/videos/actions";
import { Types as LanguagesTypes } from '../store/languages/actions'
import LayoutSaga from "./../store/layout/saga";

import {
  watchlogin,
  watchRegisterUser,
  watchForgotPassword,
  watchNewPassword,
} from "./authorization";

import { watchGetUserProfile, watchChangeUserProfile } from "./profile";

import {
  watchAddChannel,
  watchGetChannels,
  watchDeleteChannel,
  watchUpdateChannel,
} from "./channels";

import {
  watchAddPlaylist,
  watchGetPlaylists,
  watchDeletePlaylist,
  watchUpdatePlaylist,
  watchGetOnePlaylist,
} from "./playlists";

import {
  watchAddVideoToPlaylist,
  watchRemoveVideoFromPlaylist,
  watchUpdateVideo,
  watchGetVideos,
  watchGetVideoByPlaylists,
  watchGetOneVideo
} from "./videos";

import {
  watchGetLanguages,
  watchGetChannelLanguages,
  watchUpdateChannelLanguages
} from './languages'

export function* rootSaga() {
  yield all([
    takeLatest(AuthorizationTypes.LOGIN_REQUEST, watchlogin),
    takeLatest(AuthorizationTypes.REGISTER_USER_REQUEST, watchRegisterUser),
    takeLatest(AuthorizationTypes.FORGOT_PASSWORD_REQUEST, watchForgotPassword),
    takeLatest(AuthorizationTypes.SEND_NEW_PASSAWORD_REQUEST, watchNewPassword),

    takeLatest(ProfileTypes.GET_USER_PROFILE_REQUEST, watchGetUserProfile),
    takeLatest(ProfileTypes.CHANGE_USER_PROFILE_REQUEST, watchChangeUserProfile),

    takeLatest(ChannelsTypes.ADD_CHANNEL_REQUEST, watchAddChannel),
    takeLatest(ChannelsTypes.GET_CHANNELS_REQUEST, watchGetChannels),
    takeLatest(ChannelsTypes.DELETE_CHANNEL_REQUEST, watchDeleteChannel),
    takeLatest(ChannelsTypes.UPDATE_CHANNEL_REQUEST, watchUpdateChannel),

    takeLatest(PlaylistsTypes.ADD_PLAYLIST_REQUEST, watchAddPlaylist),
    takeLatest(PlaylistsTypes.GET_PLAYLISTS_REQUEST, watchGetPlaylists),
    takeLatest(PlaylistsTypes.DELETE_PLAYLIST_REQUEST, watchDeletePlaylist),
    takeLatest(PlaylistsTypes.UPDATE_PLAYLIST_REQUEST, watchUpdatePlaylist),
    takeLatest(PlaylistsTypes.GET_ONE_PLAYLIST_REQUEST, watchGetOnePlaylist),

    takeLatest(
      VideosTypes.ADD_VIDEO_TO_PLAYLIST_REQUEST,
      watchAddVideoToPlaylist
    ),
    takeLatest(
      VideosTypes.REMOVE_VIDEO_FROM_PLAYLIST_REQUEST,
      watchRemoveVideoFromPlaylist
    ),
    takeLatest(VideosTypes.UPDATE_VIDEO_REQUEST, watchUpdateVideo),
    takeLatest(VideosTypes.GET_VIDEOS_REQUEST, watchGetVideos),
    takeLatest(
      VideosTypes.GET_VIDEO_BY_PLAYLIST_REQUEST,
      watchGetVideoByPlaylists
    ),
    takeLatest(VideosTypes.GET_ONE_VIDEO_REQUEST, watchGetOneVideo),

    takeLatest(LanguagesTypes.GET_LANGUAGES_REQUEST, watchGetLanguages),
    takeLatest(LanguagesTypes.GET_CHANNEL_LANGUAGES_REQUEST, watchGetChannelLanguages),
    takeLatest(LanguagesTypes.UPDATE_CHANNEL_LANGUAGES_REQUEST, watchUpdateChannelLanguages),

    LayoutSaga(),
  ]);
}
