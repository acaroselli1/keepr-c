<template>
  <div class="mainsearch">
 <router-link to ="/"><button class ="btn btn-primary pull-left">Back to Main</button></router-link>
  <router-link to ="/"><button @click ="logout()"class ="btn btn-primary pull-right">Logout</button></router-link>
    <h1><span>k</span>eepr Main List</h1>
  </div>
</template>

<script>

import { store } from '../store'
export default {
  name: 'mainsearch',
  data () {
    return {
     
     
    }
  },

  //  mounted(){
  //   $.get('/api/').then(data => {
  //     this.students = data
  //   })
  // },

      methods:{
       logout(){
           this.$store.dispatch('logout')
        },
      }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  font-weight: normal;
  color:white;
  padding-top:10vh;
}



span{
 color:skyblue;
 text-shadow:1px 1px 8px blue;
}

button{
  display:flex;
  justify-content:flex-start;
}


</style>