<template lang="html">
  <div class="random-page">
    <videotag v-for="item in videos" :item="item" :key="set_key(item)"></videotag>
  </div>
</template>

<script>
import videotag from './video'
export default {
  data() {
    return {
      videos: []
    }
  },
  methods: {
    set_key(item) {
      return item.name
    },
    get_video() {
      this.$http.get('/video/random',{
        params:{
          limit:6
        }
      }).then((res) => {
        this.videos = res.data
      })
    }
  },
  mounted() {
    this.get_video()
  },
  components: {
    videotag
  }
}
</script>

<style lang="css">
.random-page{

}
</style>
