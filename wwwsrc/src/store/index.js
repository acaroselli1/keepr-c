import vue from 'vue'
import vuex from 'vuex'
// import $ from 'jquery'
import router from '../router'
import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 10000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: '//localhost:3000/',
  timeout: 2000,
  withCredentials: true
})


vue.use(vuex)





// function CreateAccountExample() {
//   api.post('account', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
// }

// function loginAndGetDataExample() {
//   api.post('account/login', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
// }

// function logout() {
//   api.delete('account/logout')
// }

// function GetDataExample() {
//   api('values').then(d => {
//     console.log("Values Controller Data:", d)
//   }).catch(err => {
//     console.error(err)
//   })
// }

// function getAuth(){
//   api('account').then(res => {
//     console.log("Auth Response", res)
//   })
// }

// // loginAndGetDataExample()
// getAuth()

































var store = new vuex.Store({
  state: {
    user: {}
  },









mutations: {

setUser(state, data) {
  state.user = data
},

createUser(state, data) {
  state.user = data
},

logoutUser(state, data) {
  state.user = {}
}

},

























actions: {
  createUser({ commit, dispatch }, user) {
    auth.post("/", user).then(res => {
      if (res.data.data) {
        return router.push('/mainsearch')
      }
      commit('createUser', res)
    })
  },


authenticate({ commit, dispatch }) {
  auth('/').then(res => {
    console.log(res)
    if (!res.data.data) {
      return router.push('/login')
    }
    commit('setUser', res.data.data)
    router.push('/mainsearch')
  })
    .catch(err => {
      //commit('handleError', err)
      router.push('/login')
    })
},

login({ commit, dispatch }, user) {
  auth.post("login", user).then(res => {
    console.log(res)
    if (res.data.data) {
      return router.push('/mainsearch')
    } else if (res.data.error) {
      alert('Invalid Username or Password')
    }

    commit('setUser', res)
  })
    .catch(err => {
      commit('handleError', err)
    })
},

logout({ commit, dispatch }) {
  auth.delete("logout").then(res => {
    if (!res.data.data) {
      return router.push('/login')
    }
    commit('logoutUser', res)
  })
    .catch(err => {
      commit('handleError', err)
    })
}



}
})

export default store
