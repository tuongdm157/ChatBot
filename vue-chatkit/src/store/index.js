import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: 'Relax! This is just a drill error message',
    user: {
      username: 'tuong',
      name: 'Tuong Dang'
    },
    reconnect: false,
    activeRoom: { id: '123' },
    rooms: [{
      id: '123',
      name: 'Ships'
    },
    {
      id: '124',
      name: 'Treasure'
    }],
    users: [
      {
        username: 'Linh',
        name: 'LinBe',
        presence: 'online'
      },
      {
        username: 'Phu',
        name: 'PhuLuong',
        presence: 'offline'
      }
    ],
    messages: [
      {
        username: 'tuong',
        date: '11/12/1644',
        text: 'Not all treasure is silver and gold mate'
      },
      {
        username: 'tuong',
        date: '12/12/1644',
        text: 'If you were waiting for the opportune moment, that was it'
      },
      {
        username: 'tuong',
        date: '12/12/1644',
        text: 'You know Jack, I thought I had you figured out'
      }
    ],
    userTyping: null
  },
  mutations,
  actions,
  getters: {
    hasError: state => state.error ? true : false
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})