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
                urlFeed: [
                    'http://www.lepoint.fr/rss.xml',
                    'http://www.leparisien.fr/une/rss.xml#xtor=RSS-1481423633',
                    'http://www.lemonde.fr/rss/une.xml',
                    'https://www.bfmtv.com/rss/societe/',
                    'https://www.francetvinfo.fr/titres.rss',
                    'https://www.ouest-france.fr/rss-en-continu.xml',
                    'https://www.lexpress.fr/rss/alaune.xml',
                    'https://www.frenchweb.fr/rubrique/actualite/feed',
                    // 'http://www.linternaute.com/actualite/rss/'
                ]
            }
        }
    }
</script>

<style scoped>

</style>

