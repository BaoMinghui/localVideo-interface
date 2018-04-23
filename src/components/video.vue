<template lang="html">
  <div class="video" >

    <a :href='video_url(item)'>
      <div class="img">

      </div>
    <p class="video_name">
        {{item.name}}
    </p>
    </a>
  </div>
</template>

<script>
export default {
  name:'video_tag',
  props:{
    item:{
      type:Object
    }
  },
  data(){
    return{

    }
  },
  methods:{
    video_url(item) {
      return '/video/' + item.id
    }
  }
}
</script>

<style lang="css" scoped>
.video{
  margin: 1.25rem
}
.video_name{
  font-size: 1rem;
  width: 9rem;
  word-break: break-all;
}
.img{
  height: 5.5rem;
  width: 9rem;
  background-color: #666;
}
</style>
