import Vue from 'vue'
import Vuex from 'vuex'
import { setI18nLanguage } from '../i18n/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    locale: 'zh_CN'
  },
  mutations: {
    increment (state) {
      state.count++
    },
    mergeI18nLocal(state,payload){
      state.locale = payload
      setI18nLanguage(state.locale)
    }
  }
})

export default store
