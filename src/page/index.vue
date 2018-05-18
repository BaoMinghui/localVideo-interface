<template lang="html">
  <div class="content">

    <el-row
    type="flex"
    justify="center"
    >
      <el-col :xl="16" class="video_area">
        <videotag v-for="item in video" :item="item" :key="set_key(item)"></videotag>
      </el-col>
    </el-row>

    <el-pagination
      class="pagetag"
      background
      small
      layout="prev, pager, next,sizes,jumper"
      :page-size="page_size"
      :page-sizes='[6,10,20,30]'
      :pager-count="5"
      :page-count="total"
      :current-page="page"
      @current-change="page_change"
      @prev-click="page_change_sub"
      @next-click="page_change_add"
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
      total: 0,
      limit: 10,
      tag: []
    }
  },
  methods: {
    getStatus(urlStr) {
      var urlStrArr = urlStr.split('/')
      return Number(urlStrArr[urlStrArr.length - 1])
    },
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
          limit: this.limit
        }
      }).then(
        (res) => {
          if (res.data.status) {
            this.video = res.data.data
            this.total = res.data.total
            window.scrollTo(0, 0);
            this.$router.push(
              '/page/' + `${this.page}`
            )
          }
        }
      )
    },
    page_size_change(val) {
      this.$store.commit('page_size_change', val)
      this.limit = val
      this.getData()
    },
    set_key(item) {
      return item.name
    },
    page_change_add() {
      this.$store.commit('page_change_add')
      this.getData()
    },
    page_change_sub() {
      this.$store.commit('page_change_sub')
      this.getData()
    },
    page_change(val) {
      this.$store.commit('page_change', val)
      this.getData()
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    videotag
  },
  watch: {
    '$route' (to, from) {
      this.page_change(this.getStatus(this.$route.path))
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    },
    page_size() {
      return this.$store.state.page_size
    }
  },
  created(){
    this.getData()
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
    justify-content: center;
    align-items: flex-start;
  }
</style>
