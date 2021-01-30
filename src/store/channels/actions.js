
export const Types = {
  ADD_CHANNEL_REQUEST: 'ADD_CHANNEL_REQUEST',
  ADD_CHANNEL_SUCCESS: 'ADD_CHANNEL_SUCCESS',
  
  GET_CHANNELS_REQUEST: 'GET_CHANNELS_REQUEST',
  GET_CHANNELS_SUCCESS: 'GET_CHANNELS_SUCCESS',
  
  SET_ACTIVE_CHANNEL: 'SET_ACTIVE_CHANNEL',
  
  DELETE_CHANNEL_REQUEST: 'DELETE_CHANNEL_REQUEST',

  UPDATE_CHANNEL_REQUEST: 'UPDATE_CHANNEL_REQUEST',
}

const addChannelRequest = (payload) => ({
  type: Types.ADD_CHANNEL_REQUEST,
  payload
})

const addChannelSucces = (payload) => ({
  type: Types.ADD_CHANNEL_SUCCESS,
  payload
})

const getChannelsRequest = () => ({
  type: Types.GET_CHANNELS_REQUEST,
})

const getChannelsSuccess = (payload) => ({
  type: Types.GET_CHANNELS_SUCCESS,
  payload,
})

const setActiveChannel = (payload) => ({
  type: Types.SET_ACTIVE_CHANNEL,
  payload,
})

const deleteChannelRequest = (payload) => ({
  type: Types.DELETE_CHANNEL_REQUEST,
  payload,
})

const updateChannelRequest = (payload) => ({
  type: Types.UPDATE_CHANNEL_REQUEST,
  payload,
})


export default {
  addChannelRequest,
  addChannelSucces,
  getChannelsRequest,
  getChannelsSuccess,
  setActiveChannel,
  deleteChannelRequest,
  updateChannelRequest,
}