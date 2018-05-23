import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/actu-components/News'
import VideoGames from '@/components/actu-components/VideoGames'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/video-games',
      name: 'VideoGames',
      component: VideoGames
    }
  ]
})
