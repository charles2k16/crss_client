import axios from 'axios'
import config from '../config'

export default {
  name: 'userService',

  getUsers() {
    let url = config.USERS_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  createUser(user) {
    let url = config.USERS_URL
    return axios.post(url, user)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  updateUser(user) {
    let url = config.USERS_URL + '/' + user._id
    return axios.put(url, user)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  validAuth(loggedIn) {
    if (loggedIn == true) {
      return true
    } else {
      return false
    }
  }
}