import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    page:1,
    page_size:10
  },
  mutations:{
    page_change_add(state){
      state.page ++
    },
    page_change_sub(state){
      state.page --
    },
    page_change(state,num){
      state.page = num
    },
    page_size_change(state,num){
      state.page_size = num
    }
  }
})
