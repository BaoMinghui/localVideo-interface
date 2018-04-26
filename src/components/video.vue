<template lang="html">
  <div class="video" >

    <el-card height="16rem" shadow="hover">
      <div class="img"  @click="turn_to(item.id)">
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
  width: 9rem;
  word-break: break-all;
  display: block;
  height: 2rem;
}
.img img{
  height: 6rem;
  width: 9rem;
  background-color: #666;
}
</style>
