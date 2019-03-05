import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import plugins from './plugins'
import getters from './getters'
import count from './modules/count'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    count,
    products,
    cart
  },
  plugins
})

