<template lang="html">
  <el-row
  class="centent"
  type="flex"
  justify="center"
    >
    <el-col :xl="14">
      <h2 :key="id">{{name}}</h2>
      <video class="video_box" :src="video_url()" controls>
      </video>
      <video-tool ref="videoTool" :id="id"></video-tool>
      <random-video ref="randomVideo"></random-video>
    </el-col>
  </el-row>
</template>

<script>
import videoTool from '../components/videoTool'
import randomVideo from '../components/randomVideo'
export default {
  props: [
    "id"
  ],
  data() {
    return {
      url: '',
      videoid: '',
      name:''
    }
  },
  methods: {
    video_url() {
      return '/video/play/' + this.id
    },
    get_name(){
      this.$http.get('/video/name',{
        params:{
          id:this.id
        }
      }).then((res)=>{
        this.name = res.data
      })
    },
    getStatus(urlStr) {
      var urlStrArr = urlStr.split('/')
      return Number(urlStrArr[urlStrArr.length - 1])
    },
  },
  mounted() {
    this.get_name()
  },
  watch:{
    '$route'(to,from){
      this.get_name()
    }
  },
  components:{
    videoTool,
    randomVideo
  }
}
</script>

<style lang="css">
.centent{
  width: 100%;
  padding-top: 2rem;
}
.video_box{
  width: 100%
}
</style>
