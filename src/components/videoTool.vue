<template lang="html">

  <el-row class="video_tool">
    <!-- <el-col class="tag">
      <el-tag
        type="success"
        hit
        v-for="tag in tags">
          {{tag}}
        </el-tag>
    </el-col> -->
    <el-col
      :span="6"
      class="rate-box">
        <span>评分</span>
      <el-rate
        v-model="score"
        allow-half
        class="rate"
        @change="setScore()"
        void-color="#aaa"
        :disabled="disabled"></el-rate>
    </el-col>
    <el-col :span="6">
      <el-button type="primary" size="mini" icon="el-icon-delete"
      :disabled="deleted" @click="delete_video"></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: [
    'id'
  ],
  data() {
    return {
      tags: [],
      score: 0,
      disabled: false,
      deleted:false
    }
  },
  methods: {
    setScore() {
      let params = new URLSearchParams()
      params.append('score',`${this.score}`)
      params.append('id',`${this.id}`)
      this.disabled = true
      this.$http.post('/video/setScore', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        this.disabled = true
      })
    },
    getScore(){
      this.$http.get('/video/score',{
        params:{
          id:this.id
        }
      }).then((res)=>{
        if (res.data.status) {
          this.score = res.data.score
          this.disabled = true
        }
      })
    },
    delete_video(){
      let params = new URLSearchParams()
      params.append('id',`${this.id}`)
      this.$http.post('/video/setDelete',params,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res)=>{
        if(res.data.status === 1){
          this.$message('删除成功')
          this.$router.push('/')
        }
      })
    },
    isDeleted(){
      this.$http.get('/video/isdeleted',{
        params:{
          id:this.id
        }
      }).then((res)=>{
        if(res){
          this.deleted = res.data.deleted
        }
      })
    }
  },
  mounted(){
    this.getScore()
    this.isDeleted()
  }
}
</script>

<style lang="css">
.video_tool{
  margin-top: 1rem;
  width: 100%;
  padding: 0 1.25rem;
}
.rate-box{
  float: right;
}
.rate{
  display: inline;
}
</style>
