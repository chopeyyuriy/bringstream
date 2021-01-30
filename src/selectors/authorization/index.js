import { createSelector } from 'reselect'
import { selector, deepEqualSelector } from '../common'

const authorization = createSelector(selector, data => data.authorization)
const authData = deepEqualSelector(authorization, data => data.authData)

export default {
  authData,
}