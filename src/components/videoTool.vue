<template lang="html">

  <el-row class="video_tool">
    <el-col class="tag">
      <el-tag
        type="success"
        hit
        v-for="tag in tags">
          {{tag}}
        </el-tag>
    </el-col>
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
      disabled: false
    }
  },
  methods: {
    setScore() {
      this.disabled = true
      this.$http.post('/video/setScore', {
        score: this.score,
        id: this.id
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((res) => {
        console.log(res);
      })
    }
  }
}
</script>

<style lang="css">
.video_tool{
  margin-top: 1rem;
  width: 100%;
}
.rate-box{
  float: right;
}
.rate{
  display: inline;
}
</style>
