import createLogger from 'vuex/dist/logger'
import {PRODUCTS_CART} from "./mutations-types";

const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    let STORAGE_KEY = mutation.type.split('_')[1];
    if(STORAGE_KEY === 'user') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state[STORAGE_KEY][STORAGE_KEY]))
    } else if(STORAGE_KEY == 'cart'){
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state[STORAGE_KEY][PRODUCTS_CART]))
    } else if(STORAGE_KEY){
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state[STORAGE_KEY][STORAGE_KEY]))
    }
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
