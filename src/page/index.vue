<template lang="html">
  <div class="content">
    <div class="video_area">
      <div v-for="item in video">
        <videotag :item="item"></videotag>
      </div>
    </div>
    <pagetag :pageNumber='page' @page_up="pageUp" @page_down="pageDown"></pagetag>

  </div>
</template>

<script>
import videotag from '../components/video'
import pagetag from '../components/page'
export default {
  data() {
    return {
      video: [],
      page: 1,
      tag: []
    }
  },
  methods: {
    openVideo(id) {
      this.$router.push({
        name: 'video',
        params: {
          videoid: id
        }
      })
    },
    getData() {
      this.$http.get("/video", {
        params: {
          page: this.page
        }
      }).then(
        (res) => {
          this.video = res.data
        }
      )
    },
    pageUp() {
      this.page++
      this.getData()
    },
    pageDown() {
      this.page--
      this.getData()
    },
  },
  computed: {

  },
  watch:{

  },
  mounted() {
    this.getData()
  },
  components:{
    videotag,
    pagetag
  }
}
</script>

<style lang="css">
  .content{
    text-align: center;
  }
  .video_area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    margin: auto;
  }

</style>
