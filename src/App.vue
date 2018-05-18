<template>
  <el-container id="app">
    <top-tool ref="topTool"></top-tool>
    <router-view class="router-view"></router-view>
  </el-container>
</template>

<script>
import topTool from './components/toptool'
export default {
  name: 'App',
  components:{
    topTool
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.router-view{
  margin-top: 1.25rem;
}
</style>
