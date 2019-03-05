import {PRODUCTS,GET_CART,SET_CART,ADD_PRODUCTTOCART,PRODUCTS_CART,CHECKOUTSTATUS,PUSHPRODUCTTO_CART,DECREMENTINVENTORY_PRODUCTS,INCREMENTQUANTITY_CART,CARTTOTALPRICE} from './../mutations-types'
import data from '../../api/data'

const state = {
  [PRODUCTS_CART]: [],
  [CHECKOUTSTATUS]: null
}

const getters = {
  [GET_CART]: (state, getters, rootState) => {
    return state[PRODUCTS_CART].map(({ id, quantity }) => {
      const product = rootState[PRODUCTS][PRODUCTS].find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  [CARTTOTALPRICE]: (state, getters) => {
    return getters[GET_CART].reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}
const mutations = {
  [PUSHPRODUCTTO_CART] (state, { id }) {
    state[PRODUCTS_CART].push({
      id,
      quantity: 1
    })
  },
  
  [INCREMENTQUANTITY_CART] (state, { id }) {
    const cartItem = state[PRODUCTS_CART].find(item => item.id === id)
    cartItem.quantity++
  },
  
  [SET_CART] (state, { items }) {
    state[PRODUCTS_CART] = items
  },
  [CHECKOUTSTATUS] (state, status) {
    state[CHECKOUTSTATUS] = status
  }
}
// actions
const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state[PRODUCTS_CART]]
    commit(CHECKOUTSTATUS, null)
    // empty cart
    commit(SET_CART, { items: [] })
    shop.buyProducts(
      products,
      () => commit(CHECKOUTSTATUS, 'successful'),
      () => {
        commit(CHECKOUTSTATUS, 'failed')
        // rollback to the cart saved before sending the request
        commit(SET_CART, { items: savedCartItems })
      }
    )
  },
  
  [ADD_PRODUCTTOCART] ({ state, commit }, product) {
    commit(CHECKOUTSTATUS, null)
    if (product.inventory > 0) {
      const cartItem = state[PRODUCTS_CART].find(item => item.id === product.id)
      if (!cartItem) {
        commit(PUSHPRODUCTTO_CART, { id: product.id })
      } else {
        commit(INCREMENTQUANTITY_CART, cartItem)
      }
      // remove 1 item from stock
      commit(DECREMENTINVENTORY_PRODUCTS, { id: product.id }, { root: true })
    }
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
