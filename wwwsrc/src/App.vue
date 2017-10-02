<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Error from './components/Error'
export default {
  name: 'app',
  components:{
    Error
  },
  mounted(){
    this.$store.dispatch('authenticate')
  }
}
</script>

<style>
#app {
  font-family: 'Poppins','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color:white;
  background-color:black;
  height:100vh;
  margin:-8px -8px -8px -8px;

}
</style>
