export const Types = {
  ADD_VIDEO_TO_PLAYLIST_REQUEST: "ADD_VIDEO_TO_PLAYLIST_REQUEST",
  ADD_VIDEO_TO_PLAYLIST_SUCCESS: "ADD_VIDEO_TO_PLAYLIST_SUCCESS",

  GET_VIDEOS_REQUEST: "GET_VIDEOS_REQUEST",
  GET_VIDEOS_SUCCESS: "GET_VIDEOS_SUCCESS",

  GET_ONE_VIDEO_REQUEST: "GET_ONE_VIDEO_REQUEST",
  GET_ONE_VIDEO_SUCCESS: "GET_ONE_VIDEO_SUCCESS",

  GET_VIDEO_BY_PLAYLIST_REQUEST: "GET_VIDEO_BY_PLAYLIST_REQUEST",
  GET_VIDEO_BY_PLAYLIST_SUCCESS: "GET_VIDEO_BY_PLAYLIST_SUCCESS",

  REMOVE_VIDEO_FROM_PLAYLIST_REQUEST: "REMOVE_VIDEO_FROM_PLAYLIST_REQUEST",

  UPDATE_VIDEO_REQUEST: "UPDATE_VIDEO_REQUEST",
};

const addVideoToPlaylistRequest = (payload) => ({
  type: Types.ADD_VIDEO_TO_PLAYLIST_REQUEST,
  payload,
});

const addVideoToPlaylistSuccess = () => ({
  type: Types.ADD_VIDEO_TO_PLAYLIST_SUCCESS,
});

const getVideosRequest = (payload) => ({
  type: Types.GET_VIDEOS_REQUEST,
  payload,
});

const getVideosSuccess = (payload) => ({
  type: Types.GET_VIDEOS_SUCCESS,
  payload,
});

const getOneVideoRequest = (payload) => ({
  type: Types.GET_ONE_VIDEO_REQUEST,
  payload,
});

const getOneVideoSuccess = (payload) => ({
  type: Types.GET_ONE_VIDEO_SUCCESS,
  payload,
});

const getVideoByPlaylistRequest = (payload) => ({
  type: Types.GET_VIDEO_BY_PLAYLIST_REQUEST,
  payload,
});

const getVideoByPlaylistSuccess = (payload) => ({
  type: Types.GET_VIDEO_BY_PLAYLIST_SUCCESS,
  payload,
});

const removeVideoFromPlaylistRequest = (payload) => ({
  type: Types.REMOVE_VIDEO_FROM_PLAYLIST_REQUEST,
  payload,
});

const updateVideoRequest = (payload) => ({
  type: Types.UPDATE_VIDEO_REQUEST,
  payload,
});

export default {
  addVideoToPlaylistRequest,
  addVideoToPlaylistSuccess,
  getVideosRequest,
  getVideosSuccess,
  getOneVideoRequest,
  getOneVideoSuccess,
  getVideoByPlaylistRequest,
  getVideoByPlaylistSuccess,
  removeVideoFromPlaylistRequest,
  updateVideoRequest,
};
