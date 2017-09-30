<template>
  <div class="hello">
    <h1>Welcome to <span>k</span>eepr</h1>
    <ul>
      <li @click="showLogin">Login</li>
      <li @click="showRegister">Register</li>
      <li @click="browse">Browse</li>
   
    <form v-show ="registerShown"> 
     <input type ="text" v-model="user.name" placeholder="Username">
     <input type = "text" v-model="user.email" placeholder="Email">  
     <input type = "password" v-model="user.password" placeholder ="Password"> 
     <input type = "password" v-model="user.passwordConfirm" placeholder ="Confirm Password">
     <button class="btn btn-primary">Register</button>
    </form>
  
    
    <form v-show="loginShown">
    <input type = "text" v-model="user.email" placeholder="Email">  
    <input type = "password" v-model="user.password" placeholder ="Password"> 
    <button class="btn btn-primary">Login</button>
    </form>
    
   

    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
      methods:{
        showLogin(){
          this.loginShown = true
          this.registerShown = false
        },
        showRegister(){
          this.registerShown = true
          this.loginShown = false

        }
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

li {
  color: grey;
  text-decoration:none;
}

li:hover{
  color:white;
}

span{
 color:skyblue;
 text-shadow:1px 1px 8px blue;
}


</style>
