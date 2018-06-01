<template>
    <v-navigation-drawer class="navigation-electron" :mini-variant.sync="mini" v-model="drawer" stateless hide-overlay>
        <v-toolbar flat>
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>                
                  <img src="../assets/Kactus_logo.png">                  
              </v-list-tile-avatar>
              <v-list-tile-content>
                <router-link to="/">
                  <v-list-tile-title>Kactus</v-list-tile-title>
                </router-link>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0">
          <v-divider></v-divider>
          <v-list-tile v-for="(item, index) in items" :key="index" @click.prevent>
            <v-list-tile-action>
              <v-icon :id="'icon_select'+ index">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title id="link_select">
                  <router-link :to="item.link">
                    {{ item.title }}
                  </router-link>
                </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'Navigation',
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'A la une', icon: 'question_answer', link: '/news'},
                    { title: 'Jeux-vidéos', icon: 'videogame_asset', link: '/video-games'},
                    { title: 'Films et Séries', icon: 'movie', link: '/film-serie'},
                    { title: 'High-Tech & Web', icon: 'android', link: '/tech-web'}
                ],
                mini: true,
                right: null
            }
        }
    }
</script>

<style lang="scss" scoped>
$color-green: #32FF7E;
a {
  color: white !important;
  text-decoration: none !important;
}
</style>
