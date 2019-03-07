import {PRODUCTS,GET_PRODUCTS,SET_PRODUCTS,DECREMENTINVENTORY_PRODUCTS} from './../mutations-types'
import data from '../../api/data'
import fetch from "./../../fetch";

const state = {
  [PRODUCTS]: {}
}


const mutations = {
  [SET_PRODUCTS] (state,products){
    state[PRODUCTS] = products;
  },
  //库存减少
  [DECREMENTINVENTORY_PRODUCTS] (state, { productId }) {
    const product = state[PRODUCTS].find(product => product.productId === productId)
    product.inventory--
  }
}
  //actions
const actions = {
  [GET_PRODUCTS] ({ commit }, ...arg) {
    return fetch.getShop().then(products =>{
      commit(SET_PRODUCTS, products)
    })
  }
}
export default {
  state,
  mutations,
  actions
}
