<template lang="html">
  <el-header class="centent">
    <el-row class="tag">
      <el-col :xl='5'><el-input class="input_box" v-model="tag" placeholder="tag搜索" prefix-icon="el-icon-search"></el-input></el-col>
      <el-col :span="2" class="hidden-md-and-down"><el-button type="primary" icon="el-icon-delete">回收站</el-button></el-col>
      <el-col :span="2" class="hidden-md-and-down"><el-button type="primary"
        @click="goto_home">首页</el-button></el-col>
    </el-row>
  </el-header>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  data() {
    return {
      tag: ''
    }
  },
  methods:{
    goto_home(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
.centent {
  position: fixed;
  top: 0;
  padding-top: .63rem;
  width: 100%;
  height: auto;
  z-index: 2;
  background-color: white;
}
.tag{
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
