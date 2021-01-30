import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";

const ButtonsAPIVideo = (props) => {
  const {
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
    setLoader
  } = props;

  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="btn-toolbar py-3" role="toolbar">
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle
          caret
          color="secondary mr-2"
          className="btn btn-primary waves-light waves-effect"
        >
          {getPlaylist?.name || "All playlists"}
          <span className="arrow-down" />
        </DropdownToggle>
        <DropdownMenu className="scrollable-menu">
          <DropdownItem
            onClick={() => {
              setGetPlaylist(null);
              onGetVideos({ id: defaultChannel?.id, count: 0 });
              setSelectedPage(1);
              setChekedItems([]);
              updateDragVideo(videos);
            }}
          >
            All playlists
          </DropdownItem>
          {characters?.map((c) => {
            return (
              <DropdownItem
                key={c.id}
                onClick={() => {
                  onGetVideosByPlaylist({
                    id: c.id,
                    channel: defaultChannel?.id,
                    count: 0,
                  });
                  setGetPlaylist(c);
                  setChekedItems([]);
                  setSelectedPage(1);
                  setLoader(true)
                }}
              >
                {c.name}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </ButtonDropdown>
      {dragVIdeo?.length === 0 || dragVIdeo === null ? null : (
        <>
          <Button
            color="primary mr-2"
            className="btn btn-primary waves-light waves-effect"
            value="editVideo"
            onClick={toForm}
            disabled={checkedItems.length === 0 || checkedItems.length > 1}
          >
            Edit <i className="mdi mdi-dots-vertical ml-2 dots"></i>
          </Button>
          <Button
            color="primary mr-2"
            className="btn btn-primary waves-light waves-effect"
            value="newVideo"
            onClick={toForm}
            disabled={checkedItems.length === 0 || checkedItems.length > 1}
          >
            <i className="dripicons-folder mr-1"></i> Add to playlist
          </Button>
          <Button
            type="button"
            color="primary"
            className="btn btn-primary waves-light waves-effect"
            onClick={toggleDelete}
            disabled={checkedItems.length === 0}
          >
            {" "}
            Delete<i className="far fa-trash-alt ml-2"></i>
          </Button>
        </>
      )}
    </div>
  );
};

export default ButtonsAPIVideo;
