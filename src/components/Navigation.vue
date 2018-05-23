<template>
    <v-navigation-drawer class="navigation-electron" :mini-variant.sync="mini" v-model="drawer" stateless hide-overlay>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <!-- <img src="https://randomuser.me/api/portraits/men/85.jpg" > -->
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Nom de l'application</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" @click.prevent>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>
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
                    { title: 'Jeux-vidéos', icon: 'videogame_asset', link: '/video-games'}
                ],
                mini: true,
                right: null
            }
        }
    }
</script>

<style scoped>

</style>
