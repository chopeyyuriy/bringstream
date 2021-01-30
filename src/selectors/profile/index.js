// import { createSelector } from 'reselect'
import { selector, deepEqualSelector } from '../common'

const profile = deepEqualSelector(selector, data => data.profile)
const user = deepEqualSelector(profile, data => data.user)

export default {
  user,
}