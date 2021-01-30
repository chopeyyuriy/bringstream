// import { createSelector } from 'reselect'
import { selector, deepEqualSelector } from '../common'

const self = deepEqualSelector(selector, data => data.channels)
const channels = deepEqualSelector(self, data => data.channels)
const activeChannel = deepEqualSelector(self, data => data.activeChannel)
const isChannelAddedSuccessfuly = deepEqualSelector(self, data => data.isChannelAddedSuccessfuly)

export default {
  channels,
  activeChannel,
  isChannelAddedSuccessfuly,
}