import { combineReducers } from "redux";
import authorization from './authorization'
import common from './common'
import profile from './profile'
import channels from './channels'
import playlists from './playlists';
import videos from './videos'
import languages from './languages'

// Front
import Layout from "./layout/reducer";

const rootReducer = combineReducers({
  authorization,
  profile,
  channels,
  common,
  playlists,
  videos,
  languages,

  Layout,
});

export default rootReducer;
