import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import EmptyMessage from "./EmptyMessage";
import DeleteModal from "./DeleteModal";
import CreateEdit from "./CreateEdit";
import ButtonsAPIPlaylist from "../ButtonsAPI/ButtonsAPIPlaylist";
import CheckItems from "./CheckItems";
import ButtonsAPIVideo from "../ButtonsAPI/ButtonsAPIVideo";
import PaginationVideos from "../Pagination/Pagination";
import Loader from "../../../helpers/loader";
import { useRef } from "react";

const TabPanel = (props) => {
  const {
    characters,
    dragVIdeo,
    updateDragVideo,
    checkedItems,
    checkName,
    setCheckName,
    setCheckDesc,
    setChekedItems,
    handleOnDragEnd,
    handleChange,
    videosByPlaylist,
    changePage,
    setChangePage,
    editName,
    editDescription,
    setEditName,
    setEditDescription,
    valueButton,
    onUpdateVideo,
    onAddVideoToPlaylist,
    onGetVideosByPlaylist,
    getPlaylist,
    setGetPlaylist,
    onRemoveVideoFromPlaylist,
    onGetVideos,
    videos,
    modalSave,
    setModalSave,
    updateCharacters,
    item,
    modalDelete,
    toggleDelete,
    onPlaylistDelete,
    activeChannel,
    onAddPlaylist,
    onGetPlaylist,
    onUpdatePlaylist,
    activeTab,
    toForm,
    defaultChannel,
    playlists,
    countVideos,
    countPlaylists,
    selectedPage,
    setSelectedPage,
    toEdit,
    setActiveTab,
    countVideosByPlaylist,
    checkId,
    loader,
    setLoader,
    channelLanguages,
    onGetChannelLanguages,
    languagesAll,
    getLanguages,
    metaTitle,
    setMetaTitle,
    metaKeyword,
    setMetaKeyword,
    metaDesc,
    setMetaDesc,
    onGetOnePlaylist,
    onePlayist,
    oneVideo,
    onGetOneVideo,
  } = props;

  const prevCountVideosRef = useRef();
  const prevCountPlaylistRef = useRef();
  const prevCountVideosByPlaylistRef = useRef();

  useEffect(() => {
    prevCountVideosRef.current = countVideos;
    prevCountPlaylistRef.current = countPlaylists;
    prevCountVideosByPlaylistRef.current = countVideosByPlaylist;
  });
  const prevCountVideos = prevCountVideosRef.current;
  const prevCountVideosByPlaylist = prevCountVideosByPlaylistRef.current;
  const prevCountPlaylist = prevCountPlaylistRef.current;

  useEffect(() => {
    if (playlists === null) {
      onGetPlaylist({ id: defaultChannel?.id || "1", count: 0 });
    }
    if (videos === null) {
      onGetVideos({ id: defaultChannel?.id, count: 0 });
    }

    if (
      characters === null ||
      playlists?.length !== characters?.length ||
      checkName == editName
    ) {
      updateCharacters(playlists);
    }
    if (getPlaylist !== null) {
      if (
        dragVIdeo === null ||
        videosByPlaylist?.length !== dragVIdeo?.length ||
        checkName == editName
      ) {
        updateDragVideo(videosByPlaylist);
      }
    } else {
      if (dragVIdeo === null || videos?.length !== dragVIdeo?.length) {
        updateDragVideo(videos);
      }
    }
  }, [playlists, videosByPlaylist, videos, getPlaylist]);

  return (
    <Card className="flex-column align-items-start">
      {changePage ? (
        <CardBody className="w-100">
          {" "}
          <CreateEdit
            {...{
              onAddPlaylist,
              onUpdatePlaylist,
              defaultChannel,
              setChangePage,
              onGetPlaylist,
              valueButton,
              checkName,
              setCheckName,
              modalSave,
              editName,
              setEditName,
              editDescription,
              setEditDescription,
              setChekedItems,
              setModalSave,
              setCheckDesc,
              onUpdateVideo,
              onAddVideoToPlaylist,
              onGetVideosByPlaylist,
              getPlaylist,
              characters,
              setSelectedPage,
              checkId,
              channelLanguages,
              onGetChannelLanguages,
              languagesAll,
              getLanguages,
              metaTitle,
              setMetaTitle,
              metaKeyword,
              setMetaKeyword,
              metaDesc,
              setMetaDesc,
              onePlayist,
              oneVideo,
              onGetOneVideo,
            }}
          />
        </CardBody>
      ) : (
        <CardBody className="w-100">
          <CardTitle>{activeTab === "1" ? "Playlists" : "Videos"}</CardTitle>
          <CardSubtitle className="mb-3">
            {activeTab === "1" ? characters?.length : dragVIdeo?.length || 0}{" "}
            Total
          </CardSubtitle>
          {activeTab === "1" ? (
            <ButtonsAPIPlaylist
              {...{
                characters,
                toForm,
                checkedItems,
                toggleDelete,
              }}
            />
          ) : (
            <ButtonsAPIVideo
              {...{
                getPlaylist,
                setGetPlaylist,
                onGetVideos,
                setChekedItems,
                characters,
                toggleDelete,
                onGetVideosByPlaylist,
                dragVIdeo,
                toForm,
                checkedItems,
                setSelectedPage,
                updateDragVideo,
                videos,
                defaultChannel,
                setLoader,
              }}
            />
          )}
          <DeleteModal
            {...{
              modalDelete,
              toggleDelete,
              onPlaylistDelete,
              checkName,
              onGetPlaylist,
              setCheckName,
              setCheckDesc,
              setChekedItems,
              activeChannel,
              checkedItems,
              item,
              onRemoveVideoFromPlaylist,
              getPlaylist,
              onGetVideosByPlaylist,
              defaultChannel,
              setSelectedPage,
            }}
          />
          {activeTab === "1" ? (
            characters === null ? (
              <Loader />
            ) : characters?.length === 0 ? (
              <EmptyMessage {...{ setActiveTab, activeTab }} />
            ) : (
              <>
                <CheckItems
                  items={characters}
                  updateItems={updateCharacters}
                  {...{
                    checkedItems,
                    setChekedItems,
                    handleOnDragEnd,
                    handleChange,
                    characters,
                    toEdit,
                    onGetVideosByPlaylist,
                    getPlaylist,
                    defaultChannel,
                    loader,
                    setLoader,
                    onGetOnePlaylist,
                    onGetOneVideo,
                  }}
                />
                <PaginationVideos
                  {...{
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
                    updateCharacters,
                    playlists,
                    videosByPlaylist,
                    setLoader,
                  }}
                />
              </>
            )
          ) : dragVIdeo === null ? (
            <Loader />
          ) : dragVIdeo?.length === 0 ? (
            <EmptyMessage {...{ setActiveTab, activeTab }} />
          ) : (
            <>
              <CheckItems
                items={dragVIdeo}
                updateItems={updateDragVideo}
                {...{
                  handleOnDragEnd,
                  characters,
                  handleChange,
                  checkedItems,
                  setChekedItems,
                  toEdit,
                  onGetVideosByPlaylist,
                  getPlaylist,
                  defaultChannel,
                  loader,
                  setLoader,
                  onGetOnePlaylist,
                  onGetOneVideo,
                }}
              />
              {countVideosByPlaylist > 25 || getPlaylist === null ? (
                <PaginationVideos
                  {...{
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
                    updateCharacters,
                    playlists,
                    videosByPlaylist,
                    setLoader,
                  }}
                />
              ) : null}
            </>
          )}
        </CardBody>
      )}
    </Card>
  );
};

export default TabPanel;
