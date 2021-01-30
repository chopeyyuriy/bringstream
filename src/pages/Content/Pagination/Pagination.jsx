import React, { useEffect } from "react";
import PaginationComponent from "react-reactstrap-pagination";

const PaginationVideos = (props) => {
  const {
    countVideos,
    onGetVideos,
    updateDragVideo,
    videos,
    selectedPage,
    setSelectedPage,
    defaultChannel,
    onGetPlaylist,
    countPlaylists,
    activeTab,
    getPlaylist,
    onGetVideosByPlaylist,
    countVideosByPlaylist,
    videosByPlaylist,
    setLoader
  } = props;

  const handleSelected = (page) => {
    if(activeTab === "1") {
      onGetPlaylist( {id: defaultChannel?.id, count: ((page - 1) * 25)});
      setSelectedPage(page);
    } else {
      if(getPlaylist === null) {
        onGetVideos( {id: defaultChannel?.id, count: ((page - 1) * 25)});
        setSelectedPage(page);
      } else {
        onGetVideosByPlaylist( {id: getPlaylist?.id, channel: defaultChannel?.id, count: ((page - 1) * 25)});
        setSelectedPage(page);
      }
    }
    setLoader(true)
  };

  useEffect(() => {
    if (selectedPage) {
      if(getPlaylist === null) {
        updateDragVideo(videos);
      } else {
        updateDragVideo(videosByPlaylist)
      }
    }
  }, [selectedPage, videos]);

  return (
    <div className="d-flex justify-content-center">
      <PaginationComponent
        totalItems={activeTab === "1" ? countPlaylists : getPlaylist === null ? countVideos : countVideosByPlaylist}
        pageSize={25}
        onSelect={handleSelected}
        defaultActivePage={selectedPage}
      />
    </div>
  );
};

export default PaginationVideos;