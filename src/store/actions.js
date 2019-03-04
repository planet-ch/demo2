import {SET_COUNT,CLEAR_COUNT,BUY_PRODUCTS,GET_PRODUCTS} from './mutations-types'


export default {
  setCount: Write(SET_COUNT),
  removeCount: Write(CLEAR_COUNT),
  addProducts: Ready(BUY_PRODUCTS),
  getProducts: Ready(GET_PRODUCTS)
}

function Write (type) {
  return ({ commit }, ...args) => commit(type, ...args)
}
function Ready (type) {
  return ({ dispatch }, ...args) => {
    let res = dispatch(type, ...args)
    return res;
  }
}
