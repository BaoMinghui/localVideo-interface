<template lang="html">
  <div class="btn_area">
    <button type="button" name="button" @click="pageDown" class="btn_btn">上一页</button>
    <span class="btn-span">{{pageNumber}}</span>
    <button type="button" name="button" @click="pageUp" class="btn_btn">下一页</button>
  </div>
</template>

<script>
export default {
  name: 'page',
  props: {
    pageNumber: {
      type: Number
    }
  },
  data() {
    return {
      page: this.pageNumber
    }
  },
  watch: {
    page: function() {
      this.page = pageNumber
    }
  },
  methods: {
    pageDown(){
      this.$emit('page_down')
    },
    pageUp(){
      this.$emit('page_up')
    }
  }
}
</script>

<style lang="css">
.btn_area{
  margin: auto;
}
.btn_btn{
  font-size: 0.9rem;
  height:2rem;
  width:4.5rem;
  border-radius: .31rem;
}
.btn-span{
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  margin: 1.88rem
}
</style>
