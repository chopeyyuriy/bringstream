import { createSelectorCreator, defaultMemoize, createSelector } from 'reselect'
import isEqual from 'lodash.isequal'

export const selector = createSelector((s) => s, s => s)
const common = createSelector(selector, data => data.common) 
const errorMessage = createSelector(common, data => data.errorMessage) 
const successMessage = createSelector(common, data => data.successMessage) 
const loader = createSelector(common, data => data.loader) 

export const deepEqualSelector = createSelectorCreator(
    defaultMemoize,
    isEqual,
)

export default {
    errorMessage,
    successMessage,
    loader
}