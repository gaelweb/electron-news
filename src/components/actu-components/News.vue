<template>
    <MainActu
    :dataUrlFeedCategory="urlFeed"
    >
    </MainActu>
</template>

<script>
import MainActu from '@/components/MainActu'

    export default {
        name: 'News',
        components: {
            MainActu
        },
        data () {
            return {
                urlFeed: [ //Garder uniquement les liens en 'https'
                    // 'http://www.linternaute.com/actualite/rss/'
                    // 'http://www.leparisien.fr/une/rss.xml#xtor=RSS-1481423633',                                 
                    'https://www.lepoint.fr/rss.xml',
                    'https://www.lemonde.fr/rss/une.xml',
                    'https://www.bfmtv.com/rss/societe/',
                    'https://www.francetvinfo.fr/titres.rss',
                    'https://www.ouest-france.fr/rss-en-continu.xml',
                    'https://www.lexpress.fr/rss/alaune.xml',
                    'https://www.frenchweb.fr/rubrique/actualite/feed',
                    'https://www.20minutes.fr/feeds/rss-actu-france.xml',
                    'https://www.lesechos.fr/rss/rss_une_titres.xml',
                    'https://www.letelegramme.fr/rss.xml'
                ]
            }
        }
    }
</script>

<style scoped>

</style>

