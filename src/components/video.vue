<template lang="html">
  <div class="video"  @click="turn_to(item.id)">

    <el-card shadow="hover">
      <div class="img">
        <img src="../assets/video.jpg" alt="">
      </div>
      <p class="video_name">
          {{item.name}}
      </p>
    </el-card>

  </div>

</template>

<script>
export default {
  name: 'video_tag',
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  methods: {

    turn_to() {
      this.$router.push({
        name: 'video',
        params: {
          id: this.item.id,
          name: this.item.name
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.video{
  display: inline-block;
}
.video_name{
  font-size: 1rem;
  width: 8rem;
  word-break: break-all;
  display: block;
  height: 2rem;
}
.img img{
  width: 8rem;
  background-color: #666;
}
</style>
