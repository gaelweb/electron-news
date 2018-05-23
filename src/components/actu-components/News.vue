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
                    'https://www.bfmtv.com/rss/societe/'
                ]
            }
        }
    }
</script>

<style scoped>

.content-news {
    position: absolute;
    margin-left: 80px;
}

</style>

