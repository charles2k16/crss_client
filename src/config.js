function getApiUrl() {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    return 'http://127.0.0.1:3000/api/v1/'
  } else if (hn === 'crss-client.netlify.app') {
    return 'https://crss-client.herokuapp.com/api/v1/'
  }
}

const API_URL = getApiUrl();

export default {
  USERS_URL: API_URL + 'users',
  MESSAGES_URL: API_URL + 'messages'
}