import { axiosInstance } from "./index";
import { sha1 } from "../sha1";

export const videos = {
  //good
  addVideoToPlaylist: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;

    const queryString = `action=AddVideoToPlaylist&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({
      playlist_id: data.playlist_id,
      video_id: data.video_id,
    });

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
  },

  //good
  removeVideoFromPlaylist: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;

    const queryString = `action=RemoveVideoFromPlaylist&openKey=${authData.openKey}`;

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
  },

  // ?
  updateVideo: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;

    const queryString = `action=UpdateVideo&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({
      fields: {
        id: data.id,
        name: data.name,
      },
    });

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
  },

  //good
  getVideos: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;

    const queryString = `action=GetVideos&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({
      where: "channel_id = :cid",
      params: { cid: data.id },
      offset: data.count,
      count: 25,
    });

    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();
    formData.append("jsonData", jsonData);
    formData.append("signature", signature);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await axiosInstance
      .post(`?${queryString}`, formData, config)
      .then((response) => {
        return response;
      })
      .catch((error) => ({ error }));
  },

  getOneVideo: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;
    const queryString = `action=GetVideos&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({
      where: "id = :id",
      params: { id: data.id },
    });

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
        console.log("OneVideo: ", response);
        return response;
      })
      .catch((error) => ({ error }));
  },

  //good
  getVideosByPlaylists: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;

    const queryString = `action=GetVideosByPlaylists&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({
      where: "channel_id = :cid and playlist_id=:pid",
      params: { cid: data.channel, pid: data.id },
      offset: data.count,
      count: 25,
    });
    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();
    formData.append("jsonData", jsonData);
    formData.append("signature", signature);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await axiosInstance
      .post(`?${queryString}`, formData, config)
      .then((response) => {
        return response;
      })
      .catch((error) => ({ error }));
  },
};
