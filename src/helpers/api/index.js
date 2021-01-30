import axios from 'axios'
import {authorization} from  './authorization'
import {profile} from  './profile'
import {channels} from  './channels'
import {playlists} from './playlists'
import {videos} from './videos'
import {languages} from './languages'

const URL = 'https://bringstream.com/Engine/api/api.php'

export const axiosInstance = axios.create({
  baseURL: URL,
})

export const API = {
  authorization,
  profile,
  channels,
  playlists,
  videos,
  languages
}
