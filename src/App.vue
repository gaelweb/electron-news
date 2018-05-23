<template>
  <div id="app">
    <v-app id="inspire" dark>
      <!-- Menu -->
      <Navigation></Navigation>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data () {
    return {
      // drawer: true,
      //   items: [
      //     { title: 'A la une', icon: 'question_answer', link: '/news'}
      //   ],
      //   mini: true,
      //   right: null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
