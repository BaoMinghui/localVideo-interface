<template lang="html">
  <div class="content">

    <el-row
    type="flex"
    justify="center"
    >
      <el-col :span="14" class="video_area">
        <videotag v-for="item in video" :item="item"></videotag>
      </el-col>
    </el-row>

    <el-pagination
      class="pagetag"
      background
      layout="prev, pager, next,sizes"
      :page-size="10"
      :page-sizes='[10,20,30]'
      :page-count="total"
      :current-page.sync="page"
      @current-change="getData"
      @size-change="page_size_change"
    ></el-pagination>
  </div>
</template>

<script>
import videotag from '../components/video'
export default {
  data() {
    return {
      video: [],
      total:0,
      page: 1,
      limit:20,
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
          page: this.page,
          limit:this.limit
        }
      }).then(
        (res) => {
          if(res.data.status){
            this.video = res.data.data
            this.total = res.data.total
          }
        }
      )
    },
    page_size_change(val){
      this.limit = val
      this.getData()
    }
  },
  mounted() {
    this.getData()
  },
  components: {
    videotag
  }
}
</script>

<style lang="css">
  .content{
    text-align: center;
    padding-top: 5%;
  }
  .video_area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
.pagetag{
  margin-top: 3rem;
}
</style>
