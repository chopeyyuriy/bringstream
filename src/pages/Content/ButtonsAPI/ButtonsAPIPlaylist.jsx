import React from "react";
import { Button } from "reactstrap";

const ButtonsAPIPlaylist = (props) => {
  const { characters, toForm, checkedItems, toggleDelete } = props;

  return (
    <div className="btn-toolbar py-3" role="toolbar">
      <Button
        color="primary mr-2"
        onClick={toForm}
        className="btn btn-primary waves-light waves-effect"
        value="newPlaylist"
      >
        <i className="fa fa-plus-circle mr-1"></i> Create Playlist
      </Button>
      {characters?.length === 0 || characters === null ? null : (
        <>
          {" "}
          <Button
            color="primary mr-2"
            onClick={toForm}
            className="btn btn-primary waves-light waves-effect"
            value="editPlaylist"
            disabled={checkedItems.length === 0 || checkedItems.length > 1}
          >
            Edit <i className="mdi mdi-dots-vertical ml-2 dots"></i>
          </Button>
          <Button
            type="button"
            color="primary"
            onClick={toggleDelete}
            className="btn btn-primary waves-light waves-effect"
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

export default ButtonsAPIPlaylist;
