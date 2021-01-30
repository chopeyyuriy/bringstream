import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import selectors from "../../selectors";
import Actions from "../../store/actions";
import { withNamespaces } from "react-i18next";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  TabContent,
  TabPane,
  Card,
  CardBody,
  Row,
  Col,
  Container,
} from "reactstrap";
import "./content.scss";
import Upload from "./Upload/Upload";
import TabPanel from "./Common/TabPanel";
import TabButton from "./TabButton/TabButton";

const Content = (props) => {
  // Get props
  const {
    playlists,
    activeChannel,
    onRemoveVideoFromPlaylist,
    onAddPlaylist,
    onPlaylistDelete,
    onUpdatePlaylist,
    onGetPlaylist,
    onUpdateVideo,
    onAddVideoToPlaylist,
    onGetVideosByPlaylist,
    videosByPlaylist,
    onGetVideos,
    videos,
    countVideos,
    countPlaylists,
    countVideosByPlaylist,
    loader,
    setLoader,
    channelLanguages,
    onGetChannelLanguages,
    languagesAll,
    getLanguages,
    onGetOnePlaylist,
    onePlayist,
    oneVideo,
    onGetOneVideo,
  } = props;

  // State local
  const [changePage, setChangePage] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [checkName, setCheckName] = useState("");
  const [checkId, setCheckId] = useState(null);
  const [checkDesc, setCheckDesc] = useState("");
  const [activeTab, setActiveTab] = useState("1");
  const [valueButton, setValueButton] = useState("");
  const [characters, updateCharacters] = useState(playlists);
  const [checkedItems, setChekedItems] = useState([]);
  const [modalSave, setModalSave] = useState(false);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [dragVIdeo, updateDragVideo] = useState(videos);
  const [getPlaylist, setGetPlaylist] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);
  // Meta state value
  const [metaTitle, setMetaTitle] = useState("");
  const [metaKeyword, setMetaKeyword] = useState("");
  const [metaDesc, setMetaDesc] = useState("");

  // Vallues
  const defaultChannel = JSON.parse(localStorage.getItem("channel"));
  const item = characters?.filter((c) => c.id === checkedItems[0]);
  const itemVideos = dragVIdeo?.filter((v) => v.id === checkedItems[0]);

  // Handle event
  // Change page on click Create Playlist || Edit Playlist
  const toEdit = (p, name, lang) => {
    if (name === "editVideo") {
      setEditName(p.vimeo_name);
      setEditDescription(JSON.parse(p.description)["EN"]);
      setCheckName(p.vimeo_name);
      setCheckDesc(JSON.parse(p.description)["EN"]);
      setCheckId(p.id);
      setChangePage(true);
    } else {
      setEditName(
        p.description.includes(lang) && p.description.includes("seo_title")
          ? JSON.parse(p.description)[lang]["name"]
          : ""
      );
      setEditDescription(
        p.description.includes(lang) && p.description.includes("seo_title")
          ? JSON.parse(p.description)[lang]["description"]
          : ""
      );
      setMetaTitle(
        p.description.includes(lang) && p.description.includes("seo_title")
          ? JSON.parse(p.description)[lang]["seo_title"]
          : ""
      );
      setMetaKeyword(
        p.description.includes(lang) && p.description.includes("seo_title")
          ? JSON.parse(p.description)[lang]["seo_keyword"]
          : ""
      );
      setMetaDesc(
        p.description.includes(lang) && p.description.includes("seo_title")
          ? JSON.parse(p.description)[lang]["seo_description"]
          : ""
      );
      setCheckName(p.name);
      setCheckDesc(
        p.description.includes(lang) && p.description.includes("seo_title")
          ? JSON.parse(p.description)[lang]["description"]
          : p.description
      );
      setCheckId(p.id);
      setChangePage(true);
    }
    setValueButton(name);
  };

  const toForm = (e) => {
    const nameButton = e.target.value;
    switch (nameButton) {
      case "editPlaylist":
        setEditName(item[0].name);
        setEditDescription(
          item[0].description.includes("en") &&
            item[0].description.includes("seo_title")
            ? JSON.parse(item[0].description)["en"]["description"]
            : item[0].description
        );
        setMetaTitle(
          item[0].description.includes("en") &&
            item[0].description.includes("seo_title")
            ? JSON.parse(item[0].description)["en"]["seo_title"]
            : "keks"
        );
        setMetaKeyword(
          item[0].description.includes("en") &&
            item[0].description.includes("seo_title")
            ? JSON.parse(item[0].description)["en"]["seo_keyword"]
            : ""
        );
        setMetaDesc(
          item[0].description.includes("en") &&
            item[0].description.includes("seo_title")
            ? JSON.parse(item[0].description)["en"]["seo_description"]
            : ""
        );
        setCheckName(item[0].name);
        setEditDescription(
          item[0].description.includes("en") &&
            item[0].description.includes("seo_title")
            ? JSON.parse(item[0].description)["en"]["description"]
            : item[0].description
        );
        setCheckId(item[0].id);
        onGetOnePlaylist({ id: item[0].id });
        break;
      case "editVideo":
      case "newVideo":
        setEditName(itemVideos[0]?.vimeo_name);
        setEditDescription(JSON.parse(itemVideos[0].description)["EN"] || "");
        setCheckName(itemVideos[0].vimeo_name);
        setCheckDesc(JSON.parse(itemVideos[0].description)["EN"] || "");
        setCheckId(itemVideos[0].id);
        onGetOneVideo({id: itemVideos[0].id})
        break;
      default:
        break;
    }
    setValueButton(nameButton);
    setChangePage(true);
  };

  // Toggle modal window (DELETE)
  const toggleDelete = () => {
    setModalDelete(!modalDelete);
    item.length === 0
      ? setCheckName(itemVideos[0].vimeo_name)
      : setCheckName(item[0].name);
  };

  // Toggle tab (LEFT PANEL)
  const toggleTab = (tab) => {
    if (checkName !== editName || checkDesc !== editDescription) {
      setModalSave(!modalSave);
    } else {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
      setChangePage(false);
      setChekedItems([]);
      setSelectedPage(1);
      onGetPlaylist({ id: defaultChannel?.id, count: 0 });
      onGetVideos({ id: defaultChannel?.id, count: 0 });
    }
  };

  // Drag playlist or videos
  function handleOnDragEnd(result, items, setItems) {
    if (!result.destination) return;

    const getItems = Array.from(items);
    const [reorderedItem] = getItems.splice(result.source.index, 1);
    getItems.splice(result.destination.index, 0, reorderedItem);

    setItems(getItems);
  }

  // Set & remove checkmark
  const handleChange = (p, checkItems, setCheckItems) => {
    const clickedCategory = checkItems.indexOf(p.id);
    const all = [...checkItems];

    if (clickedCategory === -1) {
      all.push(p.id);
    } else {
      all.splice(clickedCategory, 1);
    }
    setCheckItems(all);
  };

  useEffect(() => {
    if (defaultChannel !== activeChannel) {
      setChekedItems([]);
    }
  }, [activeChannel]);

  useEffect(() => {
    onGetOnePlaylist({ id: 1227 });
  }, []);

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title={"Dashboard"} breadcrumbItem={"content"} />
          <Row className="align-items-start">
            {/* LEFT PANEL */}
            <Col xs="12" sm="5" md="4" lg="3">
              <Card>
                <CardBody>
                  <TabButton
                    {...{
                      activeTab,
                      toggleTab,
                      characters,
                      dragVIdeo,
                      countPlaylists,
                      countVideos,
                    }}
                  />
                </CardBody>
              </Card>
            </Col>
            {/* RIGHT PANEL */}
            <Col xs="12" sm="7" md="8" lg="9">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <TabPanel
                    {...{
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
                    }}
                  />
                </TabPane>
                <TabPane tabId="2">
                  <TabPanel
                    {...{
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
                    }}
                  />
                </TabPane>
                <TabPane tabId="3">
                  <Card>
                    <Upload />
                  </Card>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

// Get redux state values
const mapStatetoProps = (state) => ({
  activeChannel: selectors.channels.activeChannel(state),

  channelLanguages: selectors.languages.channelLanguages(state),
  languagesAll: selectors.languages.languagesAll(state),

  playlists: selectors.playlists.playlists(state),
  onePlayist: selectors.playlists.onePlaylist(state),
  countPlaylists: selectors.playlists.count(state),

  videos: selectors.videos.videos(state),
  videosByPlaylist: selectors.videos.videosByPlaylist(state),
  countVideos: selectors.videos.countVideos(state),
  countVideosByPlaylist: selectors.videos.countVideosByPlaylist(state),
  oneVideo: selectors.videos.oneVideo(state),

  loader: selectors.common.loader(state),
});

// Get redux state function
const mapDispatchToProps = (dispatch) => ({
  onAddPlaylist: (data) => dispatch(Actions.playlists.addPlaylistRequest(data)),
  onPlaylistDelete: (data) =>
    dispatch(Actions.playlists.deletePlaylistRequest(data)),
  onUpdatePlaylist: (data) =>
    dispatch(Actions.playlists.updatePlaylistRequest(data)),
  onGetPlaylist: (data) =>
    dispatch(Actions.playlists.getPlaylistsRequest(data)),
  onGetOnePlaylist: (data) =>
    dispatch(Actions.playlists.getOnePlaylistRequest(data)),

  onUpdateVideo: (data) => dispatch(Actions.videos.updateVideoRequest(data)),
  onAddVideoToPlaylist: (data) =>
    dispatch(Actions.videos.addVideoToPlaylistRequest(data)),
  onGetVideosByPlaylist: (data) =>
    dispatch(Actions.videos.getVideoByPlaylistRequest(data)),
  onRemoveVideoFromPlaylist: (data) =>
    dispatch(Actions.videos.removeVideoFromPlaylistRequest(data)),
  onGetVideos: (data) => dispatch(Actions.videos.getVideosRequest(data)),
  onGetOneVideo: (data) => dispatch(Actions.videos.getOneVideoRequest(data)),

  onGetChannelLanguages: (data) =>
    dispatch(Actions.languages.getChannelLanguagesRequest(data)),
  getLanguages: () => dispatch(Actions.languages.getLanguagesRequest()),

  setLoader: (data) => dispatch(Actions.common.setLoader(data)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(withNamespaces()(Content));
