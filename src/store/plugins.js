import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    let STORAGE_KEY = mutation.type.split('_')[1];
    if(STORAGE_KEY === 'user') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state[STORAGE_KEY][STORAGE_KEY]))
    } else {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state[STORAGE_KEY][STORAGE_KEY]))
    }
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
