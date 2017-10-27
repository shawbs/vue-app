import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 调用mutations: this.$store.commit('xxx') 或者 mapMutations 
 * 调用actions: this.$store.dispatch() 或者 mapActions 
 */


//声明
const state = {
  title:'hello',
  isLoading:false,
  cache:{login_state:false,login_time:0,live_time:0}
}

//过滤获取
const getters = {
  GET_LOGIN_STATE (state) {
    return state.cache.login_state
  },
  GET_LOGIN_TIME (state) {
    return state.cache.login_time
  }

}

//修改
const mutations = {
  SET_TITLE (state,payload) {
    state.title = payload.title
  },
  SET_LOGIN_STATE (state,payload) {
    state.cache.login_state = payload.login_state
  },
  SET_LOGIN_TIME (state,payload) {
    state.cache.login_time = payload.login_time
  },
  SET_LIVE_TIME (state,payload) {
     state.cache.live_time = state.cache.login_time ? 0 : payload.end_time - state.cache.login_time
  },
  UPDATE_LOADING_STATE (state,payload) {
    state.isLoading = payload.isLoading
  }
}

// 发射
const actions = {

  SET_TITLE ({commit},title) {
    commit('SET_TITLE',{title:title})
  },

  API_LOGIN ({commit}, params) {
    return new Promise((resolve,reject) =>{
      console.log(params)
      setTimeout(function() {
        commit('SET_LOGIN_STATE', {login_state:true})
        commit('SET_LOGIN_TIME', {login_time:new Date().getTime()})
        resolve()
      }, 3000);
    })
  }

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})