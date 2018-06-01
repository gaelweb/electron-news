<template>
  <v-container class="content-home" grid-list-sm text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <div class="hello">
          <img src="../assets/Kactus_logo.png" alt="">
          <h1>{{ msg }}</h1>
          <span>Developed by Gael Monbrault</span><br>
          <span>@2018</span>    
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
      msg: 'K-actus'
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
