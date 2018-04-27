<template lang="html">
  <el-row
  class="centent"
  type="flex"
  justify="center"
    >
    <el-col :xl="14">
      <h2>{{name}}</h2>
      <video class="video_box" :src="video_url()"  controls
      poster="../assets/video.jpg">
      </video>
      <video-tool ref="videoTool" :id="id"></video-tool>
    </el-col>
  </el-row>
</template>

<script>
import videoTool from '../components/videoTool'
export default {
  props: [
    "id","name"
  ],
  data() {
    return {
      url: '',
      videoid: ''
    }
  },
  methods: {
    video_url() {
      return '/video/' + this.id
    },
  },
  mounted() {

  },
  components:{
    videoTool
  }
}
</script>

<style lang="css">
.content{
  width: 100%;
}
.video_box{
  width: 100%
}
</style>
