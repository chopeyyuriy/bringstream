import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

export const DeleteModal = (props) => {
  // Get props
  const {
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
    setSelectedPage
  } = props;

  // DELETE PLAYLIST

  const onDelete = async () => {
    const ids = checkedItems;
    const promises =
      item.length === 0
        ? ids.map((id) =>
            onRemoveVideoFromPlaylist({
              playlist_id: getPlaylist.id,
              video_id: id,
            })
          )
        : ids.map(onPlaylistDelete);
    try {
      await Promise.all(promises);
      toggleDelete();
      item.length === 0
        ? await setTimeout(() => {
            onGetVideosByPlaylist({
              id: getPlaylist.id,
              channel: defaultChannel?.id,
              count: 0,
            });
          }, 1000)
        : await setTimeout(() => {
            onGetPlaylist({ id: activeChannel?.id, count: 0 });
          }, 1000);
      setCheckName("");
      setCheckDesc("");
      setChekedItems([]);
      setSelectedPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  const onCancel = () => {
    toggleDelete();
    setCheckName("");
    setCheckDesc("");
    setChekedItems([]);
  };

  return (
    <div>
      <Modal isOpen={modalDelete} toggle={toggleDelete}>
        <ModalHeader toggle={toggleDelete}>
          Are you sure you want to delete "{checkName}" playlist?
        </ModalHeader>
        <ModalFooter>
          <Button color="secondary" className="w-sm" onClick={onCancel}>
            Cancel
          </Button>
          <Button color="danger" className="w-sm" onClick={onDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModal;
