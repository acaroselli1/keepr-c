<template>
  <div id="app">
    <img src="./assets/letterk.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
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
  margin:0%;
  padding:0%;
}
</style>
