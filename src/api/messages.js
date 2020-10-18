import axios from 'axios'
import config from '../config'

export default {
  name: 'messageService',

  getMessages() {
    let url = config.MESSAGES_URL
    return axios.get(url)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },

  createMessage(message) {
    let url = config.MESSAGES_URL
    return axios.post(url, message)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error))
  },
}