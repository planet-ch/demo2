import {SET_COUNT,CLEAR_COUNT,ADD_PRODUCTTOCART,GET_PRODUCTS} from './mutations-types'


export default {
  setCount: Write(SET_COUNT),
  removeCount: Write(CLEAR_COUNT),
  getProducts: Ready(GET_PRODUCTS),
  addProductToCart: Ready(ADD_PRODUCTTOCART)
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
