<template>
  <div class="login">
    <img src="../assets/letterk.png">
    <h1>Welcome to <span>k</span>eepr</h1>
    <ul>
      <li @click="showLogin">Login</li>
      <li @click="showRegister">Register</li>
      <li><router-link class ="browse" to="/mainsearch">Browse</router-link></li>
   
    <form v-show ="registerShown"  @submit.prevent = "createUser()"> 
     <input type ="text" v-model="user.name" placeholder="Username">
     <input type = "text" v-model="user.email" placeholder="Email">  
     <input type = "password" v-model="user.password" placeholder ="Password"> 
     <input type = "password" v-model="user.passwordConfirm" placeholder ="Confirm Password">
     <button class="btn btn-primary" type="submit">Register</button>
    </form>
  
    
    <form v-show="loginShown" @submit.prevent="loginUser()">
    <input type = "text" v-model="user.email" placeholder="Email">  
    <input type = "password" v-model="user.password" placeholder ="Password"> 
    <button class="btn btn-primary">Login</button>
    </form>
    
   

    </ul>
  </div>
</template>

<script>

import { store } from '../store'
export default {
  name: 'login',
  data () {
    return {
     
     user:{
       name:'',
      email:'',
   password:'',
   passwordConfirm:''
    },
     
     
     
     
      registerShown:false,
      loginShown:false,


    }
  },

  //  mounted(){
  //   $.get('/api/').then(data => {
  //     this.students = data
  //   })
  // },

      methods:{
        showLogin(){
          this.loginShown = true
          this.registerShown = false
        },
        showRegister(){
          this.registerShown = true
          this.loginShown = false
        },
           
        createUser() {
                this.$store.dispatch('createUser', this.user)
        },
     
        loginUser() {
                this.$store.dispatch('login', this.user)
        },
     
      }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin-top: 3vh;
  margin-bottom:3vh;
  margin-left:1vw;
}

li, .browse {
  color: grey;
  text-decoration:none;
}

li:hover, .browse:hover{
  color:white;
}

span{
 color:skyblue;
 text-shadow:1px 1px 8px blue;
}

input{
  color:black;
}

img{
  padding-top:7vh;
}

div{
  margin:-8px -16px -8px -8px;
}
</style>
