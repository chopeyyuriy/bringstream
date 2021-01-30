import authorization from './authorization/actions'
import common from './common/actions'
import profile from './profile/actions'
import channels from './channels/actions'
import playlists from './playlists/actions'
import videos from './videos/actions'
import languages from './languages/actions'

export * from './layout/actions';

export default {
  authorization,
  common,
  profile,
  channels,
  playlists,
  videos,
  languages
}
