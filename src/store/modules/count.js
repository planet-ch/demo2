import {COUNT,SET_COUNT,CLEAR_COUNT} from './../mutations-types'


const state = {
  [COUNT]: 0
}


const mutations = {
  [SET_COUNT] (state, num) {
    console.log(COUNT);
    console.log(state);
    state[COUNT] = num
  },
  [CLEAR_COUNT] (state) {
    state[COUNT] = 0;
  }
}

export default {
  state,
  mutations
}
