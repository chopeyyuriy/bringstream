export const Types = {
  GET_LANGUAGES_REQUEST: "GET_LANGUAGES_REQUEST",
  GET_LANGUAGES_SUCCESS: "GET_LANGUAGES_SUCCESS",

  GET_CHANNEL_LANGUAGES_REQUEST: "GET_CHANNEL_LANGUAGES_REQUEST",
  GET_CHANNEL_LANGUAGES_SUCCESS: "GET_CHANNEL_LANGUAGES_SUCCESS",

  UPDATE_CHANNEL_LANGUAGES_REQUEST: "UPDATE_CHANNEL_LANGUAGES_REQUEST",
  UPDATE_CHANNEL_LANGUAGES_SUCCESS: "UPDATE_CHANNEL_LANGUAGES_SUCCESS",
};

const getChannelLanguagesRequest = (payload) => ({
  type: Types.GET_CHANNEL_LANGUAGES_REQUEST,
  payload,
});

const getChannelLanguagesSuccess = (payload) => ({
  type: Types.GET_CHANNEL_LANGUAGES_SUCCESS,
  payload,
});

const getLanguagesRequest = () => ({
  type: Types.GET_LANGUAGES_REQUEST,
});

const getLanguagesSuccess = (payload) => ({
  type: Types.GET_LANGUAGES_SUCCESS,
  payload,
});

const updateChannelLanguagesRequest = (payload) => ({
  type: Types.UPDATE_CHANNEL_LANGUAGES_REQUEST,
  payload,
});

const updateChannelLanguagesSuccess = () => ({
  type: Types.UPDATE_CHANNEL_LANGUAGES_SUCCESS,
});

export default {
  getLanguagesRequest,
  getLanguagesSuccess,
  getChannelLanguagesRequest,
  getChannelLanguagesSuccess,
  updateChannelLanguagesRequest,
  updateChannelLanguagesSuccess,
};
