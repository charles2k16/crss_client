import axios from 'axios'
import config from '../config'

export default {
  name: 'userService',

  getUsers() {
    let url = config.USERS_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(this.handleError(error)))
  }
}