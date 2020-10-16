function getApiUrl() {
  let hn = window.location.hostname
  if (hn === 'localhost') {
    return '127.0.0.1:3000/api/v1/'
  } else if (hn == 'fppghana.com') {
    return 'https://api.fppghana.com/api/v1/'
  }
  return '127.0.0.1:3000/api/v1/'
}

const API_URL = getApiUrl();

export default {
  USERS_URL: API_URL + 'users',
}