import { Types } from "./actions";

const initialState = {
  videos: null,
  countVideos: null,
  
  videosByPlaylist: null,
  countVideosByPlaylist: null,

  oneVideo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_VIDEOS_SUCCESS: {
      return {
        ...state,
        ...{
          videos: action.payload.playlists,
          countVideos: action.payload.count
        },
      };
    }
    case Types.GET_VIDEO_BY_PLAYLIST_SUCCESS: {
      return {
        ...state,
        ...{
          videosByPlaylist: action.payload.videos,
          countVideosByPlaylist: action.payload.count
        },
      };
    }
    case Types.GET_ONE_VIDEO_SUCCESS: {
      return {
        ...state,
        ...{
          oneVideo: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
