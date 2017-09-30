<template>
  <div class="hello">
    <h1>Welcome to <span>k</span>eepr</h1>
    <ul>
      <li>Login</li>
      <li>Register</li>
   
    <form v-show ="registerSeen"> 
     <input>
     <input>  
     <input> 
     <input>
     <button btn btn-default>Register</button>
    </form>
  
    
    <form v-show="loginSeen">
    <input>
    <input>
    <button btn btn-default>Login</button>
    </form>
    
   

    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      registerSeen:false,
      loginSeen:false

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
  margin: 0 10px;
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
}


</style>
