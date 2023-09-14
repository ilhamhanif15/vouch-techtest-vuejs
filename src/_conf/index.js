const configsys = {
  apiV1: import.meta.env.VITE_API_BASE_URL,
  socketUrl: import.meta.env.VITE_API_SOCKET_URL,
  localStorageKeys:{
      accesstoken: 'access_token'
  }
}

export default configsys;