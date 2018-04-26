import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import video from '@/page/video'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path:'/video',
      name:'video',
      component:video,
      props:true
    }
  ]
})
