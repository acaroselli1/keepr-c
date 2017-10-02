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
    console.log("before post user", user);
    api.post("account", user).then(res => {
      console.log("after post res", res);
      if (res) {
        return router.push('/mainsearch')
      }
      commit('createUser', res)
    })
  },


authenticate({ commit, dispatch }) {
  api('account').then(res => {
    console.log("authenticate?",res)
    if (!res) {
      router.push('/')
    }
    commit('setUser', res.data)
    router.push('/mainsearch')
  })
    .catch(err => {
      //commit('handleError', err)
      router.push('/')
    })
},

login({ commit, dispatch }, user) {
  api.post("account/login", user).then(res => {
    console.log("login?",res)
    if (res) {
      router.push('/mainsearch')
    } else if (res.error) {
      alert('Invalid Username or Password')
    }

    commit('setUser', res.data)
  })
    .catch(err => {
      commit('handleError', err)
    })
},

logout({ commit, dispatch }) {
  api.delete("account/logout").then(res => {
    if (!res) {
      router.push('/')
    }
    commit('logoutUser')
  })
    .catch(err => {
      commit('handleError', err)
    })
}



}
})

export default store
