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
      redirect:{
        path:'/page/1'
      }
    },{
      path:'/video/:id',
      name:'video',
      component:video,
      props:true
    },{
      path:'/page/:page',
      name:'page',
      component:index,
    }
  ]
})
