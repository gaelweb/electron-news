import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/actu-components/News'
import VideoGames from '@/components/actu-components/VideoGames'
import Movie from '@/components/actu-components/Movie'
import Techweb from '@/components/actu-components/Techweb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/film-serie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/tech-web',
      name: 'Techweb',
      component: Techweb
    }
  ]
})
