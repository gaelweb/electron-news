<template>
  <v-container class="content-home" grid-list-sm text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <div class="hello">
          <h1>{{ msg }}</h1>
        </div>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Electron App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
