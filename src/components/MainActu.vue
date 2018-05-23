<template>
    <v-content class="content-news">
      <v-container fluid fill-height>
        <v-layout justify-center>
            <v-flex xs12 sm6 md3 v-for="(item, index) in getTabEntries" :key="index">
                <v-card light>
                    <v-card-media :src="item.image" height="200px"></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ item.title }}</h3>
                            <div>{{ item.description }}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn target="_blank" :href="item.link" flat color="grey">Lien de l'article</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
    export default {
        name: 'MainActu',
        props: ['dataUrlFeedCategory'],        
        data () {
            return {
                getTabEntries: []
            }
        },
        created () {
            var tabUrlCreated = this.dataUrlFeedCategory
            var entries = null
            var tabEntries = this.getTabEntries
            // Function permettant de charger les flux rss pour chaque site
            function loadFeedNami (tabUrlData) {
                for (let i = 0; i < tabUrlData.length; i++) {
                    const element = tabUrlData[i]
                    feednami.load(element, function (result) {
                        if (result.error) {
                            console.log(result.error)
                        } else {
                            // la variable entries récupère seulement le premier article
                            // le plus récent pour chaque site
                            entries = result.feed.entries[0]
                            tabEntries.push({
                                'title': entries.title,
                                'description': entries.description,
                                'link': entries.link,
                                'image': entries.enclosures[0].url
                            })
                        }
                    })
                }
            }
            // On appelle la fonction et on récupère les flux rss
            loadFeedNami(tabUrlCreated)
        }
    }    
</script>

<style scoped>

</style>
