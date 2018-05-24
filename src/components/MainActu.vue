<template>
      <v-container class="content-news" grid-list-sm text-xs-center>
        <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md4 v-for="(item, index) in getTabEntries" :key="index">
                <v-card light>
                    <v-card-media :src="item.image" height="200px"></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ item.title }}</h3>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn target="_blank" :href="item.link" flat color="grey">Lien de l'article</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
    export default {
        name: 'MainActu',
        props: ['dataUrlFeedCategory'],        
        data () {
            return {
                getTabEntries: [],
                numberPost: 1
            }
        },
        created () {
            var tabUrlCreated = this.dataUrlFeedCategory
            var entries = null
            var tabEntries = this.getTabEntries
            var nbrP = this.numberPost
            var entriesImage = null
            
            // Function permettant de charger les flux rss pour chaque site
            function loadFeedNami (tabUrlData) {
                for (let i = 0; i < tabUrlData.length; i++) {
                    const element = tabUrlData[i]
                    feednami.load(element, function (result) {
                        if (result.error) {
                            console.log(result.error)
                        } else {
                            // la variable entries récupère les articles
                            // les plus récents pour chaque site
                            entries = result.feed.entries
                            
                            for (let x = 0; x < nbrP; x++) {
                                const entriesElement = entries[x]
                                // console.log(entriesElement)

                                //Vérification du chemin de l'image du fichier rss
                                if (entriesElement.enclosures.length === 0) {
                                    entriesImage = entriesElement.image.url
                                } else {
                                    entriesImage = entriesElement.enclosures[0].url
                                }
                                tabEntries.push({
                                    'title': entriesElement.title,
                                    'link': entriesElement.link,
                                    'image': entriesImage
                                })
                            }
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
