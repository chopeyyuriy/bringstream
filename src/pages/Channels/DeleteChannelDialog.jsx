import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { connect } from "react-redux";
import Actions from './../../store/actions';

export const DeleteChannelDialog = (props) => {
  const { modal, className, toggle, onChannelDelete, channelId, channelName } = props

  const onDelete = () => {
    onChannelDelete({id: channelId})
    toggle()
  }

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={className}>
        <ModalHeader toggle={toggle}>
          Are you sure you want to delete "{channelName}" channel?
        </ModalHeader>
        <ModalFooter>
          <Button color="secondary" className="w-sm" onClick={toggle}>Cancel</Button>
          <Button color="danger" className="w-sm" onClick={onDelete}>Delete</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
	onChannelDelete: (data) => dispatch(Actions.channels.deleteChannelRequest(data)),
})

export default connect(null, mapDispatchToProps)(DeleteChannelDialog);