// import { createSelector } from 'reselect'
import { selector, deepEqualSelector } from "../common";

const self = deepEqualSelector(selector, (data) => data.videos);
const videos = deepEqualSelector(self, (data) => data.videos);
const videosByPlaylist = deepEqualSelector(
  self,
  (data) => data.videosByPlaylist
);
const countVideos = deepEqualSelector(self, (data) => data.countVideos);
const countVideosByPlaylist = deepEqualSelector(self, (data) => data.countVideosByPlaylist)
const oneVideo = deepEqualSelector(self, (data) => data.oneVideo)

export default {
  videos,
  countVideos,
  videosByPlaylist,
  countVideosByPlaylist,
  oneVideo
};
