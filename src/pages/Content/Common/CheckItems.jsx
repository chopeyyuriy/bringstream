import React, { useState, useEffect, useRef } from "react";
import { Form, Label, Input } from "reactstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { axiosInstance } from "../../../helpers/api/index";
import { sha1 } from "../../../helpers/sha1";
import Loader from "../../../helpers/loader";

const CheckItems = (props) => {
  const {
    updateItems,
    items,
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
    onGetOneVideo
  } = props;

  const [orderByValue, setOrderByValue] = useState(0);
  const [videoId, setVideoId] = useState(0);
  const [playlistId, setPlaylistId] = useState(0);

  const prevValueRef = useRef();
  useEffect(() => {
    prevValueRef.current = orderByValue;
  });
  const prevValue = prevValueRef.current;


  let allItems = [];
  for (let str of items) {
    if (!allItems.includes(str)) {
      allItems.push(str);
    }
  }

  // set input data when changed
  const onOrderbyClick = (orderByValue, video_id, playlist_id) => {
    setOrderByValue(Number(orderByValue));
    setVideoId(video_id);
    setPlaylistId(playlist_id || 1);
  };

  // Sort items by property
  function dynamicSort(property) {
    const sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  const sortedItems = items.sort(dynamicSort("orderby"));

  const ChangeVideoOrder = async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;
    const queryString = `action=ChangeVideoOrder&openKey=${authData.openKey}`;
    const jsonData = JSON.stringify(data);
    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();

    formData.append("jsonData", jsonData);
    formData.append("signature", signature);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return await axiosInstance
      .post(`?${queryString}`, formData, config)
      .then((response) => {
        return response;
      })
      .catch((error) => ({ error }));
  };

  // save order number by Enter press
  const onEnterPress = (event) => {
    if (event.keyCode == 13) {
      ChangeVideoOrder({
        playlist_id: playlistId,
        video_id: videoId,
        orderby: orderByValue,
      });
      setTimeout(() => {
        onGetVideosByPlaylist({
          id: getPlaylist?.id,
          channel: defaultChannel?.id,
          count: 0,
        });
      }, 1000);
      event.target.blur();
      if(prevValue !== orderByValue) {
        setLoader(true)
      }
    }
  };

  useEffect(() => {
    if(sortedItems.length !== 0) {
      setLoader(false)
    }
  }, [sortedItems])

  return (
    <>
    { loader ?
    <Loader />
    :
    <Form>
      <DragDropContext
        onDragEnd={(e) => handleOnDragEnd(e, sortedItems, updateItems)}
      >
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="message-list characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sortedItems &&
                sortedItems?.map((p, index) => {
                  const element = (p.duration / 3600).toString().split("");
                  const minutes = element.splice(0, 1).join("");
                  const seconds = element.splice(1, 2);

                  return (
                    <Draggable
                      key={p.id}
                      draggableId={String(p.name)}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Label className="check d-flex align-items-center ml-4">
                            <Input
                              type="checkbox"
                              name={p.name}
                              checked={checkedItems.includes(p.id)}
                              onChange={() =>
                                handleChange(p, checkedItems, setChekedItems)
                              }
                            />

                            {sortedItems !== characters && (
                              <input
                                className="videosOrderNumber"
                                type="text"
                                checked={checkedItems.includes(p.id)}
                                defaultValue={p.orderby}
                                onChange={(event) =>
                                  onOrderbyClick(
                                    event.target.value,
                                    p.id,
                                    p.playlist_id
                                  )
                                }
                                onKeyDown={(event) => onEnterPress(event)}
                              />
                            )}

                            {sortedItems === characters ? (
                              <>
                                {" "}
                                <span
                                  id="editPlaylist"
                                  onClick={(e) => {
                                    onGetOnePlaylist({id: p.id})
                                    toEdit(p, e.currentTarget.id, "en")}}
                                >
                                  {p.name}{" "}
                                </span>
                              </>
                            ) : (
                              <>
                                {" "}
                                <img
                                  src={JSON.parse(p.pictures)["100"]}
                                  className="picture"
                                  alt="img"
                                />
                                <span
                                  id="editVideo"
                                  onClick={(e) => {
                                    onGetOneVideo({id: p.id})
                                    toEdit(p, e.currentTarget.id, "en")}}
                                >
                                  {p.vimeo_name}{" "}
                                </span>
                              </>
                            )}
                            <div className="col-mail col-mail-2">
                              <div className="date">
                                {sortedItems === characters ? (
                                  `${p?.videos_count} items`
                                ) : (
                                  <>
                                    {minutes}:
                                    {seconds.length === 0 ? "00" : seconds}{" "}
                                  </>
                                )}
                              </div>
                            </div>
                          </Label>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Form>}
    </>
  );
};

export default CheckItems;
