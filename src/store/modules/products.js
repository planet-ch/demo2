import {PRODUCTS,GET_PRODUCTS,SET_PRODUCTS,DECREMENTPRODUCTINVENTORY} from './../mutations-types'
import data from '../../api/data'

const state = {
  [PRODUCTS]: {}
}


const mutations = {
  [SET_PRODUCTS] (state,products) {
    state[PRODUCTS] = products;
  },
  //库存减少
  [DECREMENTPRODUCTINVENTORY] (state, { id }) {
    const product = state[PRODUCTS].find(product => product.id === id)
    product.inventory--
  }
}
// actions
const actions = {
  [GET_PRODUCTS] ({ commit }) {
    data.getProducts(products => {
      commit(SET_PRODUCTS, products)
    })
  }
}
export default {
  state,
  mutations,
  actions
}
