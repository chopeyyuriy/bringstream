
import { axiosInstance } from "./index";
import { sha1 } from "../sha1";


export const playlists = {

  //  good
  addPlaylist: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;
    const queryString = `action=AddPlaylist&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({ fields: data }
    );

    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();

    formData.append("jsonData", jsonData);
    formData.append('signature', signature)

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

  //  good
  deletePlaylist: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;
    const queryString = `action=DeletePlaylist&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({ id: data });
    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();
    formData.append("jsonData", jsonData);
    formData.append('signature', signature);

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
      .catch((error) => ({ error }))
  },

  //good
  updatePlaylist: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;

    const queryString = `action=UpdatePlaylist&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({ fields: data });
    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();
    formData.append("jsonData", jsonData);
    formData.append('signature', signature)

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
      .catch((error) => ({ error }))
  },

  //good
  getPlaylists: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;
    const queryString = `action=GetPlaylists&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({ where: 'channel_id = :cid', params: { cid: data.id }, offset: data.count, count: 25 });

    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();

    formData.append("jsonData", jsonData);
    formData.append('signature', signature)
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
  getOnePlaylist: async (data) => {
    const authData = sessionStorage.getItem("bringStreamAuth")
      ? JSON.parse(sessionStorage.getItem("bringStreamAuth"))
      : null;
    if (!authData) return false;
    const queryString = `action=GetPlaylists&openKey=${authData.openKey}`;

    const jsonData = JSON.stringify({ where: 'id = :id', params: { id: data.id } });
    
    const signature = sha1(queryString + authData.privateKey + jsonData);
    const formData = new FormData();

    formData.append("jsonData", jsonData);
    formData.append('signature', signature)
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
};
