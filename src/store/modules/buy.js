import {PRODUCTS,BUY_PRODUCTS,CART_PRODUCTS,SET_PRODUCTS,CHECKOUTSTATUS} from './../mutations-types'
import data from '../../api/data'

const state = {
  [PRODUCTS]: [],
  [CART_PRODUCTS]: [],
  [CHECKOUTSTATUS]: null
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState[PRODUCTS].all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
}
const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  
  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  
  setCartItems (state, { items }) {
    state.items = items
  },
  [CHECKOUTSTATUS] (state, status) {
    state[CHECKOUTSTATUS] = status
  }
}
// actions
const actions = {
  [CART_PRODUCTS] ({ commit }) {
    data.getProducts(products => {
      commit(SET_PRODUCTS, products)
    })
  },
  [BUY_PRODUCTS] ({ commit, state }, products) {
    const savedCartItems = [...state[PRODUCTS]]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    data.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },
}
export default {
  state,
  mutations,
  actions
}
