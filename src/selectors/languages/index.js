// import { createSelector } from 'reselect'
import { selector, deepEqualSelector } from "../common";

const self = deepEqualSelector(selector, (data) => data.languages);
const languagesAll = deepEqualSelector(self, (data) => data.languagesAll);
const channelLanguages = deepEqualSelector(self, (data) => data.channelLanguages);

export default {
  channelLanguages,
  languagesAll
};